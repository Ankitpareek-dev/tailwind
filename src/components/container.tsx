import { cn } from "@/utils/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-5xl mx-auto px-4", className)}>{children}</div>
  );
};
