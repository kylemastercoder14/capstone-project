"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copyright, EyeIcon, EyeOffIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        studentNumber,
        password,
        redirect: false,
      });

      if (res.error) {
        toast.error("Invalid credentials");
        return;
      }

      router.replace("/pages/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative h-screen">
        <Image
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          src={"/images/school_image.jpg"}
          alt="KLD"
          fill
        />
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="flex relative w-full items-center justify-center flex-col z-10 md:px-0 px-10">
          <div className="flex items-center justify-center mb-5 mt-20">
            <Image
              src={"/images/KLD.png"}
              width={350}
              height={350}
              alt="KLD Logo"
            />
          </div>
          <p className="bg-black opacity-60 mb-10 md:text-md text-sm text-white font-semibold text-center rounded-md py-3 px-5">
            Login to view your grades, access academic advising tools, and stay
            updated on your educational journey.
          </p>
          <Tabs defaultValue="login" className="md:w-[600px] w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="reset">Reset</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card className="shadow-lg pt-5 w-full">
                <CardHeader>
                  <CardTitle>Login your account</CardTitle>
                  <CardDescription>
                    Don&apos;t let your grades define you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-6"
                  >
                    <div className="flex flex-col items-start space-y-2">
                      <p className="text-xs text-muted-foreground uppercase font-bold">
                        Student Number
                      </p>
                      <input
                        onChange={(e) => setStudentNumber(e.target.value)}
                        className="w-full py-2 px-2 border rounded-md"
                        type="text"
                        placeholder="KLD-XX-XXXXXX"
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2 relative">
                      <p className="text-xs text-muted-foreground uppercase font-bold">
                        Password
                      </p>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        className="w-full py-3 px-2 border rounded-md"
                        placeholder="Enter password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOffIcon className="w-5 h-5 mt-4" /> : <EyeIcon className="w-5 h-5 mt-4" />}
                      </button>
                    </div>
                    <button className="bg-green-800 hover:bg-green-800/90 text-white rounded-md px-5 py-3">
                      Login
                    </button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reset">
              <Card className="shadow-lg pt-5 w-full">
                <CardHeader>
                  <CardTitle>Reset your password</CardTitle>
                  <CardDescription>Enter your student number.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-6"
                  >
                    <div className="flex flex-col items-start space-y-2">
                      <p className="text-xs text-muted-foreground uppercase font-bold">
                        Student Number
                      </p>
                      <input
                        onChange={(e) => setStudentNumber(e.target.value)}
                        className="w-full py-2 px-2 border rounded-md"
                        type="text"
                        placeholder="KLD-XX-XXXXXX"
                      />
                    </div>
                    <button className="bg-green-800 hover:bg-green-800/90 text-white rounded-md px-5 py-3">
                      Reset
                    </button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <p className="bg-black hidden opacity-60 text-white md:flex items-center md:flex-row flex-col md:text-md text-sm rounded-md justify-center text-center mt-10 py-3 px-5 font-semibold">
            Copyright <Copyright className="w-3 h-3 mx-1" /> 2024. All rights
            reserved. Kolehiyo ng Lungsod ng Dasmarinas
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
