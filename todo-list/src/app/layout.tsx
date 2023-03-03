import "../styles/globals.css";
import Providers from "@/app/providers";

import { DM_Sans } from "@next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${dmSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
