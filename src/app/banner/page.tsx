/* eslint-disable @next/next/no-img-element */
import { CSSProperties } from "react";

const PRIMARY = "#7C3AED";
const PRIMARY_LIGHT = "#A78BFA";
const SURFACE = "#F8FAFC";

const fonts = {
  heading: '"Lexend", sans-serif',
  body: '"Source Sans 3", sans-serif',
};

function Banner({
  width,
  height,
  children,
  id,
}: {
  width: number;
  height: number;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: 14,
          color: "#64748B",
          marginBottom: 8,
        }}
      >
        {id} — {width}×{height}
      </p>
      <div
        style={{
          width,
          height,
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          background: SURFACE,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function GradientBg({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${SURFACE} 0%, #EDE9FE 40%, #C4B5FD 70%, ${PRIMARY} 100%)`,
        ...style,
      }}
    />
  );
}

function Logo({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/logo.svg"
      alt="Lifetify"
      width={size}
      height={size}
      style={{ display: "block" }}
    />
  );
}

function Wordmark({ height = 20 }: { height?: number }) {
  return (
    <img
      src="/lifetify_wordmark_black.svg"
      alt="Lifetify"
      height={height}
      style={{ display: "block" }}
    />
  );
}

function CTAButton({
  fontSize = 13,
  px = 20,
  py = 8,
}: {
  fontSize?: number;
  px?: number;
  py?: number;
}) {
  return (
    <div
      style={{
        display: "inline-block",
        background: PRIMARY,
        color: "#fff",
        fontFamily: fonts.heading,
        fontWeight: 600,
        fontSize,
        padding: `${py}px ${px}px`,
        borderRadius: 999,
      }}
    >
      Download Free
    </div>
  );
}

function CategoryDot({
  color,
  label,
  fontSize = 11,
}: {
  color: string;
  label: string;
  fontSize?: number;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(8px)",
        padding: "4px 10px",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }}
      />
      <span
        style={{ fontFamily: fonts.body, fontSize, color: "#0F172A" }}
      >
        {label}
      </span>
    </div>
  );
}

/** 300×250 — Medium Rectangle */
function MediumRectangle() {
  return (
    <Banner width={300} height={250} id="Medium Rectangle">
      <GradientBg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        {/* Top: Logo + tagline */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Logo size={28} />
            <Wordmark height={18} />
          </div>
        </div>

        {/* Middle: Headline */}
        <div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontSize: 22,
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#0F172A",
              margin: 0,
            }}
          >
            Your life,
            <br />
            <span
              style={{
                background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              organized.
            </span>
          </h2>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 13,
              color: "#475569",
              margin: "6px 0 0",
              lineHeight: 1.4,
            }}
          >
            Finances, insurance, contracts &amp; more — all in one app.
          </p>
        </div>

        {/* Bottom: Categories + CTA */}
        <div>
          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 12,
            }}
          >
            <CategoryDot color="#A8C8F0" label="Banking" />
            <CategoryDot color="#A8E6CF" label="Insurance" />
            <CategoryDot color="#F4A8C8" label="Contracts" />
          </div>
          <CTAButton />
        </div>
      </div>
    </Banner>
  );
}

/** 728×90 — Leaderboard */
function Leaderboard() {
  return (
    <Banner width={728} height={90} id="Leaderboard">
      <GradientBg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 28px",
          gap: 28,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={36} />
          <Wordmark height={22} />
        </div>

        {/* Headline */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontSize: 20,
              fontWeight: 700,
              color: "#0F172A",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Your life,{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              organized.
            </span>
          </h2>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 13,
              color: "#475569",
              margin: "2px 0 0",
            }}
          >
            Finances, insurance, contracts &amp; more — one app for everything.
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: "flex", gap: 6 }}>
          <CategoryDot color="#A8C8F0" label="Banking" />
          <CategoryDot color="#A8E6CF" label="Insurance" />
          <CategoryDot color="#F4A8C8" label="Contracts" />
        </div>

        {/* CTA */}
        <CTAButton fontSize={14} px={24} py={10} />
      </div>
    </Banner>
  );
}

/** 160×600 — Wide Skyscraper */
function WideSkyscraper() {
  return (
    <Banner width={160} height={600} id="Wide Skyscraper">
      <GradientBg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 14px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div>
          <Logo size={36} />
          <div style={{ marginTop: 8 }}>
            <Wordmark height={16} />
          </div>
        </div>

        {/* Headline */}
        <div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontSize: 20,
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#0F172A",
              margin: 0,
            }}
          >
            Your life,
            <br />
            <span
              style={{
                background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              organized.
            </span>
          </h2>
        </div>

        {/* Categories */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "center",
          }}
        >
          <CategoryDot color="#A8C8F0" label="Banking" fontSize={10} />
          <CategoryDot color="#A8E6CF" label="Insurance" fontSize={10} />
          <CategoryDot color="#F4A8C8" label="Contracts" fontSize={10} />
          <CategoryDot color="#F8E8A0" label="Real Estate" fontSize={10} />
          <CategoryDot color="#C8A8F0" label="Investments" fontSize={10} />
          <CategoryDot color="#F0C8A8" label="Contacts" fontSize={10} />
        </div>

        {/* App screenshot hint */}
        <div
          style={{
            width: 80,
            height: 140,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(124,58,237,0.15)",
            border: "2px solid rgba(255,255,255,0.9)",
          }}
        >
          <img
            src="/app.jpg"
            alt="Lifetify App"
            width={80}
            height={140}
            style={{ objectFit: "cover", display: "block" }}
          />
        </div>

        {/* CTA */}
        <CTAButton fontSize={12} px={16} py={8} />
      </div>
    </Banner>
  );
}

/** 336×280 — Large Rectangle */
function LargeRectangle() {
  return (
    <Banner width={336} height={280} id="Large Rectangle">
      <GradientBg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          gap: 16,
          padding: 20,
        }}
      >
        {/* Left content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Logo size={26} />
            <Wordmark height={16} />
          </div>

          <div>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontSize: 21,
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#0F172A",
                margin: 0,
              }}
            >
              Your life,
              <br />
              <span
                style={{
                  background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                organized.
              </span>
            </h2>
            <p
              style={{
                fontFamily: fonts.body,
                fontSize: 12,
                color: "#475569",
                margin: "6px 0 0",
                lineHeight: 1.4,
              }}
            >
              Finances, insurance, contracts — all in one app.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <CategoryDot color="#A8C8F0" label="Banking" fontSize={10} />
            <CategoryDot color="#A8E6CF" label="Insurance" fontSize={10} />
            <CategoryDot color="#F4A8C8" label="Contracts" fontSize={10} />
          </div>

          <CTAButton fontSize={12} px={18} py={7} />
        </div>

        {/* Right: phone mockup */}
        <div
          style={{
            width: 100,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 100,
              height: 200,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(124,58,237,0.15)",
              border: "2px solid rgba(255,255,255,0.9)",
            }}
          >
            <img
              src="/app.jpg"
              alt="Lifetify App"
              width={100}
              height={200}
              style={{ objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </Banner>
  );
}

export default function BannerPage() {
  return (
    <div style={{ padding: 40, fontFamily: fonts.body }}>
      <h1
        style={{
          fontFamily: fonts.heading,
          fontSize: 28,
          fontWeight: 700,
          color: "#0F172A",
          marginBottom: 8,
        }}
      >
        Google Ads Banners
      </h1>
      <p style={{ color: "#64748B", marginBottom: 40, fontSize: 15 }}>
        Screenshot each banner at its native size for use in Google Ads.
      </p>

      <MediumRectangle />
      <LargeRectangle />
      <Leaderboard />
      <WideSkyscraper />
    </div>
  );
}
