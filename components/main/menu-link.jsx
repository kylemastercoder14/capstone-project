"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
    const pathname = usePathname();
    const isActive = pathname === `/pages/${item.path}` || pathname === `/pages/${item.path}/new` || pathname === `/pages/${item.path}/edit`;
  return (
    <Link href={item.path} className={`px-5 py-3 mt-3 flex items-center gap-x-3 rounded-md hover:bg-zinc-100 hover:dark:bg-slate-900 ${isActive ? "bg-zinc-100 dark:bg-slate-900" : ""}`}>
      {item.icon}
      <p>{item.title}</p>
    </Link>
  );
};

export default MenuLink;
