import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { WandSparklesIcon, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center py-20">
      <div className="flex items-center justify-center gap-3 border border-yellow-600 bg-amber-100 px-3 py-2 dark:bg-yellow-600">
        <WandSparklesIcon className="size-6" />
        <h3 className="text-xl font-semibold">
          AI-powered repository analysis
        </h3>
      </div>
      <h2 className="mt-12 text-6xl font-bold">TLDR any Github repo.</h2>
      <p className="text-muted-foreground mt-6 text-xl">
        AI-generated summary // tech stack analysis // architecture diagrams
      </p>
      <div className="mt-12 flex w-[80%] items-center justify-center gap-3">
        <InputGroup className="h-14 w-[80%] border border-yellow-600">
          <InputGroupAddon align="inline-start">
            <Github className="size-5" />
          </InputGroupAddon>
          <InputGroupInput
            className="text-base"
            placeholder="https://github.com/username/repository"
          />
        </InputGroup>
        <Button
          className="h-14 border border-black bg-yellow-300 px-6 text-base font-semibold"
          variant="outline"
        >
          Analyze Repo
        </Button>
      </div>
      <p className="text-muted-foreground mt-12 text-lg">Try an example:</p>
      <div className="mt-6 flex items-center justify-center gap-6">
        <Card className="p-3">
          <CardContent className="text-base">vercel/next.js</CardContent>
        </Card>
        <Card className="p-3">
          <CardContent className="text-base">facebook/react</CardContent>
        </Card>
        <Card className="p-3">
          <CardContent className="text-base">microsoft/vscode</CardContent>
        </Card>
      </div>
    </div>
  );
}
