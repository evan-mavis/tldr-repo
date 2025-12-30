import { Network, WandSparklesIcon } from "lucide-react";

export default function HomeHeaderContent() {
  return (
    <>
      <div className="m-2 flex items-center justify-center gap-2 border border-yellow-600 bg-amber-100 px-2 py-1.5 sm:gap-3 sm:px-3 sm:py-2 dark:bg-yellow-600">
        <WandSparklesIcon className="size-4 sm:size-6" />
        <h3 className="sm:text-md text-xs font-semibold md:text-xl">
          AI-powered repository visualization tool
        </h3>
      </div>
      <h2 className="mt-8 text-2xl font-bold sm:mt-12 sm:text-4xl md:text-6xl">
        TLDR any Github repo.
      </h2>
      <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:mt-8 sm:flex-row sm:gap-3">
        <div className="flex items-center gap-2 text-sm sm:text-base md:text-xl">
          <Network className="size-4 text-yellow-600 sm:size-5" />
          <span className="text-foreground font-semibold">
            Interactive architecture diagrams
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-base md:text-xl">
          <div className="size-1.5 rounded-full bg-yellow-600 sm:size-2" />
          <span className="text-muted-foreground">quick AI summary</span>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-base md:text-xl">
          <div className="size-1.5 rounded-full bg-yellow-600 sm:size-2" />
          <span className="text-muted-foreground">tech stack analysis</span>
        </div>
      </div>
    </>
  );
}
