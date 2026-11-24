import { notFound } from "next/navigation";

// Fallback only: src/middleware.ts answers "/" with the retired page and 410.
export default function Home() {
  notFound();
}
