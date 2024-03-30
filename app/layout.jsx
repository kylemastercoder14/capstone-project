import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/session-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KLD Grades Portal",
  description: "We welcome you our dearest DASMARINEÑOS to the KOLEHIYO NG LUNGSOD NG DASMARIÑAS. Education in the CITY OF DASMARIÑAS is free for all through the initiative and love of Cong. Pidi, Mayor Jenny, BM Kiko, KLD Family, and the entire CITY GOVERNMENT OF DASMARIÑAS. Allow us to build your foundation. Be part of the KLD family."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
