"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-black text-red-500 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--black-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
              [--red-gradient:repeating-linear-gradient(100deg,var(--red-900)_10%,var(--red-700)_20%,var(--red-600)_30%,var(--red-500)_40%,var(--red-400)_50%)]
              [background-image:var(--black-gradient),var(--red-gradient)]
              dark:[background-image:var(--black-gradient),var(--red-gradient)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[15px] opacity-70
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--black-gradient),var(--red-gradient)] 
              after:dark:[background-image:var(--black-gradient),var(--red-gradient)]
              after:[background-size:200%,_100%] 
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
