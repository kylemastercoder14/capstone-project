
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { menuItems } from "@/constant";
import MenuLink from "./menu-link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="w-5 h-5" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <div className="flex items-center space-x-3 mb-5 mt-5">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <p className="font-semibold">KLD Grades Portal</p>
          </div>
        </SheetHeader>
        <ul className="space-y-4 flex flex-col">
          {menuItems.map((item) => (
            <li key={item.title}>
              <span className="font-bold text-xs text-muted-foreground uppercase">
                {item.title}
              </span>
              {item.list.map((menu) => (
                <MenuLink item={menu} key={menu.title} />
              ))}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
