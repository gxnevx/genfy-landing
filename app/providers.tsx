"use client";

import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/contexts/LangContext";
import { PostHogProvider } from "@/components/providers/PostHogProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LangProvider>
        <PostHogProvider />
        {children}
      </LangProvider>
    </ThemeProvider>
  );
}
