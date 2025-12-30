"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  value: string | null;
  onValueChange: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null,
);

interface AccordionProps {
  type?: "single";
  collapsible?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | null) => void;
  children: React.ReactNode;
  className?: string;
}

function Accordion({
  type = "single",
  collapsible = false,
  value: valueProp,
  defaultValue,
  onValueChange: onValueChangeProp,
  children,
  className,
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string | null>(
    defaultValue ?? null,
  );
  const value = valueProp ?? internalValue;
  const onValueChange = onValueChangeProp ?? setInternalValue;

  const handleValueChange = React.useCallback(
    (newValue: string | null) => {
      if (type === "single") {
        if (collapsible && value === newValue) {
          onValueChange(null);
        } else {
          onValueChange(newValue);
        }
      }
    },
    [type, collapsible, value, onValueChange],
  );

  return (
    <AccordionContext.Provider
      value={{ value, onValueChange: handleValueChange }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

function AccordionItem({ value, children, className }: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within Accordion");
  }

  const isOpen = context.value === value;

  return (
    <div className={cn("border-b border-yellow-600", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...(typeof child.props === "object" && child.props !== null
              ? child.props
              : {}),
            "data-state": isOpen ? "open" : "closed",
            "data-value": value,
          } as React.HTMLAttributes<HTMLElement>);
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  "data-value"?: string;
}

function AccordionTrigger({
  children,
  className,
  "data-value": dataValue,
}: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionTrigger must be used within Accordion");
  }

  const isOpen = context.value === dataValue;

  const handleClick = () => {
    if (dataValue) {
      context.onValueChange(isOpen ? null : dataValue);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex w-full flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline",
        className,
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "size-4 shrink-0 text-yellow-600 transition-transform duration-200",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  "data-value"?: string;
}

function AccordionContent({
  children,
  className,
  "data-value": dataValue,
}: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within Accordion");
  }

  const isOpen = context.value === dataValue;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn(
        "animate-accordion-down overflow-hidden text-sm",
        className,
      )}
    >
      <div className="pt-0 pb-4">{children}</div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
