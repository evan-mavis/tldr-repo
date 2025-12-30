import { Github } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "./ui/input-group";
import { Button } from "./ui/button";

interface RepoInputProps {
  value: string;
  onChange: (value: string) => void;
  onAnalyze?: () => void;
}

const GITHUB_PREFIX = "https://github.com/";

export default function RepoInput({
  value,
  onChange,
  onAnalyze,
}: RepoInputProps) {
  const getRepoPart = (fullValue: string) => {
    if (fullValue.startsWith(GITHUB_PREFIX)) {
      return fullValue.slice(GITHUB_PREFIX.length);
    }

    return fullValue;
  };

  const repoPart = getRepoPart(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(GITHUB_PREFIX + inputValue);
  };

  const handleAnalyze = () => {
    if (!value || value === GITHUB_PREFIX) {
      return; // Don't analyze if input is empty
    }
    onAnalyze?.();
  };

  return (
    <div className="mt-8 flex w-[90%] flex-col items-center justify-center gap-3 sm:mt-12 sm:w-[80%] sm:flex-row">
      <InputGroup className="h-12 w-full border border-yellow-600 sm:h-14 sm:w-[80%]">
        <InputGroupAddon align="inline-start">
          <Github className="size-4 sm:size-5" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-start">
          <InputGroupText className="text-xs! sm:text-sm! md:text-base! lg:text-xl!">
            {GITHUB_PREFIX}
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          placeholder="username/repository"
          value={repoPart}
          onChange={handleInputChange}
        />
      </InputGroup>
      <Button
        className="h-12 w-full border border-black bg-yellow-300 px-6 text-sm font-semibold sm:h-14 sm:w-auto sm:text-base dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400"
        variant="outline"
        onClick={handleAnalyze}
      >
        Analyze Repo
      </Button>
    </div>
  );
}
