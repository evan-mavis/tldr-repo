import { Github } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Button } from "./ui/button";

export default function RepoInput() {
  return (
    <div className="mt-8 flex w-[90%] flex-col items-center justify-center gap-3 sm:mt-12 sm:w-[80%] sm:flex-row">
      <InputGroup className="h-12 w-full border border-yellow-600 sm:h-14 sm:w-[80%]">
        <InputGroupAddon align="inline-start">
          <Github className="size-4 sm:size-5" />
        </InputGroupAddon>
        <InputGroupInput placeholder="https://github.com/username/repository" />
      </InputGroup>
      <Button
        className="h-12 w-full border border-black bg-yellow-300 px-6 text-sm font-semibold sm:h-14 sm:w-auto sm:text-base dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400"
        variant="outline"
      >
        Analyze Repo
      </Button>
    </div>
  );
}
