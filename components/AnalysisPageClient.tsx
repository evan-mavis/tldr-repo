"use client";

interface AnalysisPageClientProps {
  repo: string;
}

export default function AnalysisPageClient({ repo }: AnalysisPageClientProps) {
  return (
    <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Analysis for: {repo}</h1>
        <p className="text-muted-foreground mt-2">
          Repository analysis will be displayed here
        </p>
      </div>
    </div>
  );
}
