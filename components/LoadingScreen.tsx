"use client";

import { useEffect, useState, useRef, startTransition } from "react";
import { Loader2, CheckCircle2, Circle } from "lucide-react";

type LoadingPhase = "summary" | "techstack" | "diagram" | "complete";

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const phases = [
  {
    id: "summary" as LoadingPhase,
    label: "Generating AI summary of repo",
    duration: 3000,
  },
  {
    id: "techstack" as LoadingPhase,
    label: "Identifying tech stack",
    duration: 2500,
  },
  {
    id: "diagram" as LoadingPhase,
    label: "Creating architecture diagram",
    duration: 3500,
  },
];

export default function LoadingScreen({
  isVisible,
  onComplete,
}: LoadingScreenProps) {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const onCompleteRef = useRef(onComplete);
  const prevVisibleRef = useRef(isVisible);

  // Keep onComplete ref up to date
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Reset state when visibility becomes true (start of new cycle)
  useEffect(() => {
    if (isVisible && !prevVisibleRef.current) {
      startTransition(() => {
        setCurrentPhaseIndex(0);
        setIsComplete(false);
      });
    }
    prevVisibleRef.current = isVisible;
  }, [isVisible]);

  // Handle phase progression when visible
  useEffect(() => {
    if (!isVisible) {
      // Cleanup timeouts when hiding
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    const moveToNextPhase = () => {
      setCurrentPhaseIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex < phases.length) {
          // Schedule next phase
          timeoutRef.current = setTimeout(
            moveToNextPhase,
            phases[nextIndex].duration,
          ) as unknown as NodeJS.Timeout;
          return nextIndex;
        } else {
          // All phases complete
          setIsComplete(true);
          timeoutRef.current = setTimeout(() => {
            onCompleteRef.current?.();
          }, 1000) as unknown as NodeJS.Timeout;
          return prevIndex;
        }
      });
    };

    // Start first phase
    timeoutRef.current = setTimeout(
      moveToNextPhase,
      phases[0].duration,
    ) as unknown as NodeJS.Timeout;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-card flex w-full max-w-md flex-col gap-8 rounded-lg border p-8 shadow-lg">
        <div className="flex flex-col gap-6">
          {phases.map((phase, index) => {
            const isActive = index === currentPhaseIndex;
            const isCompleted = index < currentPhaseIndex;
            const isPending = index > currentPhaseIndex;

            return (
              <div
                key={phase.id}
                className="flex items-center gap-4 transition-opacity duration-300"
                style={{
                  opacity: isPending ? 0.5 : 1,
                }}
              >
                <div className="flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="size-6 text-green-600 dark:text-green-400" />
                  ) : isActive ? (
                    <Loader2 className="size-6 animate-spin text-yellow-600 dark:text-yellow-400" />
                  ) : (
                    <Circle className="text-muted-foreground size-6" />
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium transition-colors sm:text-base ${
                      isActive
                        ? "text-foreground"
                        : isCompleted
                          ? "text-green-600 dark:text-green-400"
                          : "text-muted-foreground"
                    }`}
                  >
                    {phase.label}
                  </p>
                  {isActive && (
                    <div className="bg-muted mt-2 h-1 w-full overflow-hidden rounded-full">
                      <div className="h-full w-full animate-pulse bg-yellow-600 dark:bg-yellow-400" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {isComplete && (
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400">
            <CheckCircle2 className="size-5" />
            <span>Analysis complete!</span>
          </div>
        )}
      </div>
    </div>
  );
}
