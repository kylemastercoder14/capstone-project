"use client";
import Sidebar from "@/components/main/sidebar";
import Navbar from "@/components/main/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { useEffect, useState } from "react";

const PageLayout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex">
        <div className="sticky top-0 left-0 w-[300px] md:flex flex-col hidden h-screen border-r p-5 flex-1">
          <Sidebar />
        </div>
        <div className="p-5 md:flex-[5] flex-1">
          <Navbar />
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PageLayout;
