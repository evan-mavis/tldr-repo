"use client";

import { useState, useEffect } from "react";
import { Clock, Github, Trash2 } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { type AnalysisHistoryItem } from "@/lib/analysis-history";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AnalysisHistoryProps {
  history: AnalysisHistoryItem[];
}

export function AnalysisHistory({ history }: AnalysisHistoryProps) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTimeAgo = (timestamp: number): string => {
    const seconds = Math.floor((now - timestamp) / 1000);

    if (seconds < 60) return "Just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return new Date(timestamp).toLocaleDateString();
  };

  if (history.length === 0) {
    return (
      <SidebarGroup>
        <SidebarGroupContent>
          <div className="text-muted-foreground px-2 py-8 text-center text-sm">
            <Clock className="mx-auto mb-2 size-8 opacity-50" />
            <p>No analysis history yet</p>
            <p className="mt-1 text-xs">Your analyzed repos will appear here</p>
          </div>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {history.map((item, index) => (
            <div
              key={item.id}
              className="hover:bg-sidebar-accent mb-2 border border-yellow-600 p-1"
            >
              <SidebarMenuItem className="py-1.5">
                <SidebarMenuButton className="w-full items-center bg-transparent hover:bg-transparent">
                  <div className="flex min-w-0 flex-1 items-center gap-2">
                    <Github className="text-muted-foreground size-4 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="cursor-default truncate text-sm font-medium">
                            {item.repoName}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.repoName}</p>
                        </TooltipContent>
                      </Tooltip>
                      <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                        <Clock className="size-3" />
                        <span>{formatTimeAgo(item.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                  <SidebarMenuAction
                    showOnHover
                    className="text-muted-foreground hover:text-destructive top-1/2 -translate-y-1/2"
                  >
                    <Trash2 />
                  </SidebarMenuAction>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
