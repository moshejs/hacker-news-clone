import type { Metadata } from "next";

// Fallback only: src/middleware.ts answers every request before the app runs.
export const metadata: Metadata = {
  title: "Demo retired",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
