import { Card, CardContent } from "./ui/card";

export default function ExampleCards() {
  return (
    <>
      <p className="text-muted-foreground mt-8 text-sm sm:mt-12 sm:text-lg">
        Try an example:
      </p>
      <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-6">
        <Card className="w-full cursor-pointer p-2.5 transition-all hover:border-yellow-600 hover:bg-amber-50 sm:w-auto sm:p-3 dark:hover:bg-yellow-950/20">
          <CardContent className="text-sm sm:text-base">
            vercel/next.js
          </CardContent>
        </Card>
        <Card className="w-full cursor-pointer p-2.5 transition-all hover:border-yellow-600 hover:bg-amber-50 sm:w-auto sm:p-3 dark:hover:bg-yellow-950/20">
          <CardContent className="text-sm sm:text-base">
            facebook/react
          </CardContent>
        </Card>
        <Card className="w-full cursor-pointer p-2.5 transition-all hover:border-yellow-600 hover:bg-amber-50 sm:w-auto sm:p-3 dark:hover:bg-yellow-950/20">
          <CardContent className="text-sm sm:text-base">
            microsoft/vscode
          </CardContent>
        </Card>
      </div>
    </>
  );
}
