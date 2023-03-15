"use client";

import "../styles/globals.css";
import Providers from "@/app/providers";
import { DM_Sans } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${dmSans.className}`}>
        <Providers>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Providers>
      </body>
    </html>
  );
}
