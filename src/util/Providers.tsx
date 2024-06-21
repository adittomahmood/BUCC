"use client";

import { ThemeProvider } from "@/components/themeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({});
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <SessionProvider>
          <Toaster closeButton richColors />
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}