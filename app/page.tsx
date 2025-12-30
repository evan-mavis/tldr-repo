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
    <div className="mt-8 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2 border border-yellow-600 bg-amber-100 px-1 dark:bg-yellow-600">
        <WandSparklesIcon />
        <h3 className="text-lg">AI-powered repository analysis</h3>
      </div>
      <h2 className="mt-3 text-4xl font-bold">TLDR any Github repo.</h2>
      <p className="mt-3">
        AI-generated summary // tech stack analysis // architecture diagrams
      </p>
      <div className="mt-5 flex w-[80%] items-center justify-center gap-2">
        <InputGroup className="h-12 w-[80%] border border-yellow-600">
          <InputGroupAddon align="inline-start">
            <Github />
          </InputGroupAddon>
          <InputGroupInput placeholder="https://github.com/username/repository" />
        </InputGroup>
        <Button
          className="h-12 border border-black bg-yellow-300"
          variant="outline"
        >
          Analyze Repo
        </Button>
      </div>
      <p className="mt-5">Try an example:</p>
      <div className="mt-4 flex items-center justify-center gap-5">
        <Card className="p-1">
          <CardContent>vercel/next.js</CardContent>
        </Card>
        <Card className="p-1">
          <CardContent>facebook/react</CardContent>
        </Card>
        <Card className="p-1">
          <CardContent>microsoft/vscode</CardContent>
        </Card>
      </div>
    </div>
  );
}
