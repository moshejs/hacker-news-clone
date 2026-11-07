import { ImageResponse } from "next/og";

export const alt = "Hacker News Clone: the current top stories from Hacker News";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#f3f4f6",
          borderTop: "24px solid #FE7139",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 112, fontWeight: 700, color: "#000" }}>Hacker News</div>
        <div style={{ display: "flex", fontSize: 44, color: "#374151", marginTop: 24 }}>
          <span style={{ color: "#FE7139" }}>latest</span>
          <span style={{ margin: "0 20px" }}>|</span>
          <span>starred</span>
        </div>
        <div style={{ fontSize: 36, color: "#6b7280", marginTop: 48 }}>
          A Next.js reader for the top stories
        </div>
      </div>
    ),
    size,
  );
}
