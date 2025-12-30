import { Card, CardContent } from "./ui/card";

interface ExampleCardsProps {
  onCardClick: (repo: string) => void;
}

export default function ExampleCards({ onCardClick }: ExampleCardsProps) {
  const examples = ["vercel/next.js", "facebook/react", "microsoft/vscode"];

  return (
    <>
      <p className="text-muted-foreground mt-8 text-sm sm:mt-12 sm:text-lg">
        Try an example:
      </p>
      <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-6">
        {examples.map((repo) => (
          <Card
            key={repo}
            className="w-full cursor-pointer p-2.5 transition-all hover:border-yellow-600 hover:bg-amber-50 sm:w-auto sm:p-3 dark:hover:bg-yellow-950/20"
            onClick={() => onCardClick(repo)}
          >
            <CardContent className="text-sm sm:text-base">{repo}</CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
