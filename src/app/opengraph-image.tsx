import { ImageResponse } from "next/og";
import { business } from "@/lib/data";

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
          padding: "80px",
          background: "#131209",
          color: "#f4efe6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 20,
              height: 64,
              borderRadius: 10,
              border: "3px solid #313131",
              overflow: "hidden",
              backgroundImage:
                "repeating-linear-gradient(45deg, #b3182c 0 9px, #f4efe6 9px 18px, #1c2a4a 18px 27px, #f4efe6 27px 36px)",
            }}
          />
          <span style={{ fontSize: 28, letterSpacing: 4, color: "#c9a24b" }}>
            {business.shortName.toUpperCase()}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 600, marginTop: 40, maxWidth: 900 }}>
          Seu corte, no seu horário, sem fila de espera
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a9a297", marginTop: 24 }}>
          {business.address}
        </div>
      </div>
    ),
    size
  );
}
