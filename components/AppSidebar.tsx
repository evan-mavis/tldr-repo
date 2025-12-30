import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { type AnalysisHistoryItem } from "@/lib/analysis-history";
import { CodeXmlIcon } from "lucide-react";
import { AppSidebarClient } from "./AppSidebarClient";

interface AppSidebarProps {
  history: AnalysisHistoryItem[];
}

export function AppSidebar({ history }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-sidebar-border border-b">
        <div className="ml-8 flex items-center gap-2 px-2 py-2.5">
          <CodeXmlIcon className="size-5 text-yellow-600 dark:text-yellow-400" />
          <h2 className="text-sm font-semibold">Analysis History</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarClient history={history} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
