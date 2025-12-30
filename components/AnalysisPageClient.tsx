"use client";

import {
  FileText,
  Code,
  Network,
  Star,
  GitFork,
  AlertCircle,
  Eye,
  GitBranch,
  ArrowLeft,
  Code2,
  Monitor,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface AnalysisPageClientProps {
  repo: string;
}

export default function AnalysisPageClient({ repo }: AnalysisPageClientProps) {
  const router = useRouter();

  // TODO: Replace with actual data from API/database
  const summary =
    "A modern web framework built on React that enables server-side rendering, static site generation, and API routes. Provides excellent developer experience with built-in optimizations for performance and SEO.";

  // TODO: Replace with actual data from API/database
  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express"],
    database: ["PostgreSQL", "Prisma"],
    deployment: ["Vercel", "Docker"],
    testing: ["Jest", "React Testing Library"],
    tools: ["ESLint", "Prettier"],
  };

  // TODO: Replace with actual GitHub API data
  const repoStats = {
    stars: 125000,
    forks: 28000,
    issues: 450,
    watchers: 8500,
  };

  const repoUrl = `https://github.com/${repo}`;
  const cloneUrl = `https://github.com/${repo}.git`;

  const handleClone = async () => {
    try {
      await navigator.clipboard.writeText(cloneUrl);
      // TODO: Add toast notification for feedback
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleOpenInVSCode = () => {
    window.location.href = `vscode://vscode.git/clone?url=${encodeURIComponent(repoUrl)}`;
  };

  const handleOpenInCursor = () => {
    window.location.href = `cursor://vscode.git/clone?url=${encodeURIComponent(repoUrl)}`;
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-6">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push("/")}
        className="text-muted-foreground hover:text-foreground mb-4 -ml-2"
      >
        <ArrowLeft className="mr-2 size-4" />
        Back to Home
      </Button>

      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {repo}
            </a>
          </h1>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Repository Analysis
          </p>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <Star className="size-4 text-yellow-600 sm:size-5" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold sm:text-xl">
                {repoStats.stars.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-xs">Stars</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GitFork className="size-4 text-yellow-600 sm:size-5" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold sm:text-xl">
                {repoStats.forks.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-xs">Forks</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="size-4 text-yellow-600 sm:size-5" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold sm:text-xl">
                {repoStats.issues.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-xs">Issues</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="size-4 text-yellow-600 sm:size-5" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold sm:text-xl">
                {repoStats.watchers.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-xs">Watchers</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClone}
            className="border-yellow-600 hover:bg-amber-50 dark:hover:bg-yellow-950/20"
          >
            <GitBranch className="mr-2 size-4" />
            Clone
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`${repoUrl}/fork`, "_blank")}
            className="border-yellow-600 hover:bg-amber-50 dark:hover:bg-yellow-950/20"
          >
            <GitFork className="mr-2 size-4" />
            Fork
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-600 hover:bg-amber-50 dark:hover:bg-yellow-950/20"
              >
                <Code2 className="mr-2 size-4" />
                Open in Editor
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleOpenInVSCode}>
                <Code2 className="mr-2 size-4" />
                VS Code
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleOpenInCursor}>
                <Monitor className="mr-2 size-4" />
                Cursor
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card className="border-yellow-600">
        <CardContent className="p-0">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="summary"
          >
            <AccordionItem value="summary" className="border-yellow-600">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-yellow-600 sm:size-5" />
                  <span className="text-base font-medium sm:text-lg">
                    AI Summary
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground px-4 text-sm leading-relaxed sm:text-base">
                  {summary}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-stack" className="border-yellow-600">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-2">
                  <Code className="size-4 text-yellow-600 sm:size-5" />
                  <span className="text-base font-medium sm:text-lg">
                    Tech Stack
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 px-4">
                  {Object.entries(techStack).map(([category, technologies]) => (
                    <div key={category} className="flex flex-col gap-2">
                      <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech: string) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-yellow-600 text-sm hover:bg-amber-50 dark:hover:bg-yellow-950/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="architecture" className="border-yellow-600">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-2">
                  <Network className="size-4 text-yellow-600 sm:size-5" />
                  <span className="text-base font-medium sm:text-lg">
                    Architecture Diagram
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-yellow-600/30 bg-amber-50/30 px-4 dark:bg-yellow-950/10">
                  <div className="text-center">
                    <Network className="mx-auto mb-4 size-12 text-yellow-600/50 sm:size-16" />
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Architecture diagram will be generated here
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
