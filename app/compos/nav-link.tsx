"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({ href, children }:{ href:string, children:ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={cn('flex border-b-2 hover:bg-accent p-2  border-background',isActive ? 'border-primary bg-accent' :'')}
      href={href}
       >
      {children}
    </Link>
  );
}
