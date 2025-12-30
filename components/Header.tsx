import { CodeXmlIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between border-b border-yellow-600 p-3">
      <div className="flex items-center justify-center gap-1">
        <SidebarTrigger className="mr-1 border-yellow-600" />
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
