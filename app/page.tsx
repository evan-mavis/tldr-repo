"use client";

import { useState } from "react";
import ExampleCards from "@/components/ExampleCards";
import HomeHeaderContent from "@/components/HomeHeaderContent";
import RepoInput from "@/components/RepoInput";

const GITHUB_PREFIX = "https://github.com/";

export default function Home() {
  const [repoUrl, setRepoUrl] = useState(GITHUB_PREFIX);

  const handleCardClick = (repo: string) => {
    setRepoUrl(GITHUB_PREFIX + repo);
  };

  return (
    <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center px-4">
      <HomeHeaderContent />
      <RepoInput value={repoUrl} onChange={setRepoUrl} />
      <ExampleCards onCardClick={handleCardClick} />
    </div>
  );
}
