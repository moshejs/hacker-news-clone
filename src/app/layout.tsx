import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SavedStoriesProvider } from "@/contexts/SavedStoriesContext";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

const description =
  "A Next.js Hacker News reader: browse the current top stories from the official HN API, load more ten at a time, and star the ones to keep.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacker-news-clone-eight-gules.vercel.app"),
  title: "Hacker News Clone",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hacker News Clone",
    title: "Hacker News Clone",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacker News Clone",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <SavedStoriesProvider><body className={inter.className}>{children}<footer className="bg-gray-100 px-4 pb-6 pt-2 text-center text-xs text-gray-500">Built by <a href="https://www.quentin.software/" className="text-gray-700 underline hover:text-orange-500">Quentin.Code</a></footer><Analytics /><GoogleAnalytics /></body></SavedStoriesProvider>

    </html>
  );
}
