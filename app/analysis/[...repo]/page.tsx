import { Suspense } from "react";
import AnalysisPageClient from "@/components/AnalysisPageClient";

interface AnalysisPageProps {
  params: Promise<{
    repo: string[];
  }>;
}

export default async function AnalysisPage({ params }: AnalysisPageProps) {
  const { repo } = await params;
  const repoString = repo.join("/");

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <AnalysisPageClient repo={repoString} />
    </Suspense>
  );
}
