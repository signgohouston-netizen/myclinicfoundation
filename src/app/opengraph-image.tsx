import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Volunteer Healthcare Marketplace`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #0294b2 0%, #0a7d98 50%, #10657c 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 108,
              height: 108,
              borderRadius: 999,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0294b2",
              fontSize: 64,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
              MyClinic Foundation
            </div>
            <div style={{ fontSize: 22, color: "#d0f4fd", letterSpacing: 4 }}>
              501(C)(3) NONPROFIT
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 940,
            letterSpacing: -1.5,
          }}
        >
          Volunteer healthcare, within reach of everyone.
        </div>

        <div style={{ marginTop: 28, fontSize: 28, color: "#ecfbff", maxWidth: 900 }}>
          Doctors · Pharmacies · Labs · Hospitals · Nurses · Donors — USA, Pakistan &amp; worldwide
        </div>
      </div>
    ),
    { ...size }
  );
}
