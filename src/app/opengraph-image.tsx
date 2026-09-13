import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gözde Akın — Uzman Diyetisyen & Psikolog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: "linear-gradient(135deg, #FAF8F4 0%, #FFFDF9 58%, #EFF3EC 100%)",
          color: "#26352C",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "64%" }}>
          <div
            style={{
              fontSize: 25,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#4A5A45",
              marginBottom: 18,
            }}
          >
            Uzman Diyetisyen • Psikolog
          </div>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.02, color: "#4A5A45" }}>
            Gözde Akın
          </div>
          <div style={{ fontSize: 34, marginTop: 24, lineHeight: 1.35, color: "#52604E" }}>
            Bilimsel, bütüncül ve sürdürülebilir beslenme ile psikoloji desteği
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 38,
              padding: "14px 22px",
              borderRadius: 999,
              border: "2px solid #D4AD47",
              color: "#4A5A45",
              fontSize: 24,
              width: "fit-content",
              background: "rgba(255,255,255,0.55)",
            }}
          >
            Özel Klinik • Kadıköy / İstanbul
          </div>
        </div>

        <div
          style={{
            width: 330,
            height: 330,
            borderRadius: "50%",
            border: "10px solid #4A5A45",
            borderRightColor: "#D4AD47",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            background: "#FFFDF9",
          }}
        >
          <div
            style={{
              width: 24,
              height: 190,
              borderRadius: 999,
              background: "#4A5A45",
              transform: "rotate(12deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 86,
              top: 122,
              width: 96,
              height: 52,
              borderRadius: "100% 0 100% 0",
              background: "#4A5A45",
              transform: "rotate(28deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 78,
              top: 168,
              width: 78,
              height: 42,
              borderRadius: "100% 0 100% 0",
              background: "#C8BBAA",
              transform: "rotate(-18deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 88,
              top: 52,
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#D4AD47",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
