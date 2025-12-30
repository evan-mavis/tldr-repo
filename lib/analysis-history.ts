export interface AnalysisHistoryItem {
  id: string;
  repoUrl: string;
  repoName: string; // e.g., "vercel/next.js"
  timestamp: number;
  summary?: string;
  techStack?: string[];
}

// Server-side function to fetch analysis history from database
// TODO: Implement your database query here
export async function getAnalysisHistory(): Promise<AnalysisHistoryItem[]> {
  // Example:
  // const history = await db.analysisHistory.findMany({
  //   orderBy: { timestamp: 'desc' },
  //   take: 20,
  // });
  // return history;

  // Mock data for development
  const mockHistory: AnalysisHistoryItem[] = [
    {
      id: "1",
      repoUrl: "https://github.com/vercel/next.js",
      repoName: "vercel/next.js",
      timestamp: Date.now() - 5 * 60 * 1000, // 5 minutes ago
      summary: "React framework for production",
      techStack: ["React", "TypeScript", "Next.js"],
    },
    {
      id: "2",
      repoUrl: "https://github.com/facebook/react",
      repoName: "facebook/react",
      timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
      summary: "A JavaScript library for building user interfaces",
      techStack: ["React", "JavaScript"],
    },
    {
      id: "3",
      repoUrl: "https://github.com/microsoft/vscode",
      repoName: "microsoft/vscode",
      timestamp: Date.now() - 24 * 60 * 60 * 1000, // 1 day ago
      summary: "Visual Studio Code editor",
      techStack: ["TypeScript", "Electron"],
    },
    {
      id: "4",
      repoUrl: "https://github.com/tailwindlabs/tailwindcss",
      repoName: "tailwindlabs/tailwindcss",
      timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
      summary: "A utility-first CSS framework",
      techStack: ["CSS", "PostCSS", "JavaScript"],
    },
    {
      id: "5",
      repoUrl: "https://github.com/nodejs/node",
      repoName: "nodejs/node",
      timestamp: Date.now() - 7 * 24 * 60 * 60 * 1000, // 1 week ago
      summary: "Node.js JavaScript runtime",
      techStack: ["C++", "JavaScript", "V8"],
    },
  ];

  return mockHistory;
}
