import { SOURCE_URL } from "../retired";

// Fallback only: src/middleware.ts answers every request with 410 before this runs.
export default function NotFound() {
  return (
    <main style={{ maxWidth: "36rem", margin: "0 auto", padding: "48px 16px", fontFamily: "system-ui, sans-serif" }}>
      <h1>This practice project&rsquo;s demo has been retired</h1>
      <p>It was a learning exercise and is not affiliated with Hacker News or Y Combinator.</p>
      <p>
        <a href={SOURCE_URL}>View the source on GitHub</a>
      </p>
    </main>
  );
}
