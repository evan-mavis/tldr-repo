"use client";

import { useState } from "react";
import ExampleCards from "@/components/ExampleCards";
import HomeHeaderContent from "@/components/HomeHeaderContent";
import RepoInput from "@/components/RepoInput";
import LoadingScreen from "@/components/LoadingScreen";

const GITHUB_PREFIX = "https://github.com/";

export default function HomePage() {
  const [repoUrl, setRepoUrl] = useState(GITHUB_PREFIX);
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = (repo: string) => {
    setRepoUrl(GITHUB_PREFIX + repo);
  };

  const handleAnalyze = () => {
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
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
