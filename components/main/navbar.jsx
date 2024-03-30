"use client";

import { Bell, Menu, Moon, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import ProfileDropdown from "./profile-dropdown";
import { ModeToggle } from "./mode-toggle";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-3 items-center p-3 rounded-md border">
      <div className="mr-3 cursor-pointer md:hidden block">
        <MobileNav />
      </div>
      <div className="flex items-center gap-1 md:w-[400px] border w-full rounded-md bg-zinc-100 dark:bg-slate-900 px-3">
        <Search className="w-4 h-4" />
        <Input placeholder="Search..." className="border-0 ouline-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-x-3">
          <Button variant="outline" className="py-3 px-3 rounded-full relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-2 -right-2 text-xs py-0.5 px-1.5" variant="destructive">4</Badge>
          </Button>
          <ModeToggle />
        </div>
        <p className="mr-5 ml-3">|</p>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;
