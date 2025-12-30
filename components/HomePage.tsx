"use client";

import { useState, useEffect, startTransition } from "react";
import { useSearchParams } from "next/navigation";
import ExampleCards from "@/components/ExampleCards";
import HomeHeaderContent from "@/components/HomeHeaderContent";
import RepoInput from "@/components/RepoInput";
import LoadingScreen from "@/components/LoadingScreen";

const GITHUB_PREFIX = "https://github.com/";

export default function HomePage() {
  const searchParams = useSearchParams();
  const [repoUrl, setRepoUrl] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("repo") || GITHUB_PREFIX;
    }
    return GITHUB_PREFIX;
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const repoParam = searchParams.get("repo");
    if (repoParam && repoParam !== repoUrl) {
      startTransition(() => {
        setRepoUrl(repoParam);
      });
    }
  }, [searchParams, repoUrl]);

  const handleCardClick = (repo: string) => {
    setRepoUrl(GITHUB_PREFIX + repo);
  };

  const handleAnalyze = () => {
    setIsLoading(true);
  };

  const handleLoadingComplete = async () => {
    setIsLoading(false);

    // TODO: Save to history via server action
    // const repoName = extractRepoName(repoUrl);
    // await saveAnalysisToHistory({
    //   repoUrl,
    //   repoName,
    // });

    // TODO: Navigate to results page or show results
  };

  return (
    <>
      <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center px-4">
        <HomeHeaderContent />
        <RepoInput
          value={repoUrl}
          onChange={setRepoUrl}
          onAnalyze={handleAnalyze}
        />
        <ExampleCards onCardClick={handleCardClick} />
      </div>
      <LoadingScreen isVisible={isLoading} onComplete={handleLoadingComplete} />
    </>
  );
}
