import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 26,
            height: 46,
            borderRadius: 13,
            border: "3px solid #313131",
            overflow: "hidden",
            backgroundImage:
              "repeating-linear-gradient(45deg, #b3182c 0 7px, #f4efe6 7px 14px, #1c2a4a 14px 21px, #f4efe6 21px 28px)",
          }}
        />
      </div>
    ),
    size
  );
}
