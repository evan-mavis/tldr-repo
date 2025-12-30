"use client";

import { CodeXmlIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ModeToggle";
import { useSidebar } from "./ui/sidebar";
import { cn } from "@/lib/utils";

export default function Header() {
  const { open, isMobile } = useSidebar();
  console.log(open);

  return (
    <div className="flex w-full items-center justify-between border-b border-yellow-600 p-3">
      <div
        className={cn(
          "flex items-center justify-center gap-1 transition-[margin] duration-200 ease-in-out",
          !open && !isMobile && "ml-10",
          isMobile && "ml-10",
        )}
      >
        <h1 className="mr-1 text-2xl font-bold">TLDR Repo.</h1>
        <CodeXmlIcon className="text-yellow-400" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <ModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
