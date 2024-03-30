import { connectMongoDB } from "@/lib/db";
import StudentModel from "@/models/student";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
  
        async authorize(credentials) {
          const { studentNumber, password } = credentials;
  
          try {
            await connectMongoDB();
            const user = await StudentModel.findOne({ studentNumber });
  
            if (!user) {
              return null;
            }
  
            return user;
          } catch (error) {
            console.log("Error: ", error);
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/",
    },
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };