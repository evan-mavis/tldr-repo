import { AnalysisHistory } from "@/components/AnalysisHistory";
import { type AnalysisHistoryItem } from "@/lib/analysis-history";

interface AppSidebarClientProps {
  history: AnalysisHistoryItem[];
}

export function AppSidebarClient({ history }: AppSidebarClientProps) {
  return <AnalysisHistory history={history} />;
}
