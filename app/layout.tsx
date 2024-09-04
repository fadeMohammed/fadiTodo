import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "أنجز يا شفت 💪",
  description: "أنجز يا شفت 💪",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="RTL" className="dark">
      <link rel="manifest" href="manifest.json" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}