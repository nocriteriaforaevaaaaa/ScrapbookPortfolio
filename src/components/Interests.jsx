import React from "react";

const interests = [
  {
    name: "Dancing",
    desc: "Moving to the rhythm at any time, any place, cultural stages, random rooms, wherever the music takes me",
    color: "rose",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle
          cx="32"
          cy="12"
          r="6"
          fill="#FF6B8A"
          stroke="#D44A6A"
          strokeWidth="1.5"
        />
        <path
          d="M32 18v12"
          stroke="#D44A6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 22l-12 8"
          stroke="#D44A6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 22l10 10"
          stroke="#D44A6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 30l-8 16"
          stroke="#D44A6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 30l10 14"
          stroke="#D44A6A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M18 28l-4 2"
          stroke="#FFB6C8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M44 34l4-2"
          stroke="#FFB6C8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* music notes */}
        <circle cx="10" cy="14" r="2" fill="#FFD93D" />
        <path
          d="M12 14V6l6-2"
          stroke="#FFD93D"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="52" cy="18" r="2" fill="#FFD93D" />
        <path
          d="M54 18V10"
          stroke="#FFD93D"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* sparkles */}
        <path
          d="M8 32l1-3 1 3 3 1-3 1-1 3-1-3-3-1z"
          fill="#FF8FA8"
          opacity="0.6"
        />
        <path
          d="M54 8l1-2 1 2 2 1-2 1-1 2-1-2-2-1z"
          fill="#FF8FA8"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    name: "Basketball",
    desc: "Nothing clears my mind like hitting the court and scoring baskets for fun",
    color: "sage",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle
          cx="32"
          cy="32"
          r="22"
          fill="#F5A623"
          stroke="#D4870E"
          strokeWidth="2"
        />
        <path
          d="M10 32c0 0 10-8 22-8s22 8 22 8"
          stroke="#D4870E"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M10 32c0 0 10 8 22 8s22-8 22-8"
          stroke="#D4870E"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M32 10v44" stroke="#D4870E" strokeWidth="1.5" />
        <path
          d="M32 10c-6 8-6 20 0 22s6 14 0 22"
          stroke="#D4870E"
          strokeWidth="1.2"
          fill="none"
        />
        {/* bounce lines */}
        <path
          d="M30 56l2 4 2-4"
          stroke="#D4870E"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M28 58l4 3 4-3"
          stroke="#D4870E"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.3"
        />
        {/* star */}
        <path d="M50 10l1-2 1 2 2 1-2 1-1 2-1-2-2-1z" fill="#FFD93D" />
      </svg>
    ),
  },
  {
    name: "Crocheting",
    desc: "Turning yarn into cute creations, from amigurumi to cozy scarves, one loop at a time",
    color: "lavender",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* yarn ball */}
        <circle
          cx="28"
          cy="36"
          r="18"
          fill="#C3AED6"
          stroke="#9B86BD"
          strokeWidth="1.5"
        />
        <path
          d="M14 28c8 4 16 4 24 0"
          stroke="#9B86BD"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M16 36c6 4 14 4 20 0"
          stroke="#9B86BD"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M18 44c4 3 12 3 16 0"
          stroke="#9B86BD"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        {/* yarn strand */}
        <path
          d="M44 30 Q50 20 56 22 Q60 24 54 30 Q48 36 52 40 Q56 44 50 48"
          stroke="#C3AED6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* crochet hook */}
        <path
          d="M50 48l6-2"
          stroke="#8B7355"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M56 46c2-1 3 0 2 2"
          stroke="#8B7355"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* hearts */}
        <path
          d="M10 12c0-2 2-3 3-1l-3 4-3-4c1-2 3-1 3 1z"
          fill="#FF8FA8"
          opacity="0.5"
        />
        <path
          d="M52 10c0-1.5 1.5-2.5 2.5-1l-2.5 3-2.5-3c1-1.5 2.5-.5 2.5 1z"
          fill="#FF8FA8"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    name: "Reading",
    desc: "Lost in suspense novels and stories that keep me turning pages way past bedtime",
    color: "sky",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* open book */}
        <path
          d="M8 14h24v38H8z"
          fill="#A8D8EA"
          stroke="#5B8BA0"
          strokeWidth="1.5"
        />
        <path
          d="M32 14h24v38H32z"
          fill="#D4ECF5"
          stroke="#5B8BA0"
          strokeWidth="1.5"
        />
        <path d="M32 14v38" stroke="#5B8BA0" strokeWidth="1.5" />
        {/* pages */}
        <line
          x1="12"
          y1="22"
          x2="28"
          y2="22"
          stroke="#5B8BA0"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="12"
          y1="27"
          x2="28"
          y2="27"
          stroke="#5B8BA0"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="12"
          y1="32"
          x2="24"
          y2="32"
          stroke="#5B8BA0"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="36"
          y1="22"
          x2="52"
          y2="22"
          stroke="#5B8BA0"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="36"
          y1="27"
          x2="52"
          y2="27"
          stroke="#5B8BA0"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="36"
          y1="32"
          x2="48"
          y2="32"
          stroke="#5B8BA0"
          strokeWidth="1"
          opacity="0.3"
        />
        {/* sparkle stars */}
        <path d="M20 8l1-3 1 3 3 1-3 1-1 3-1-3-3-1z" fill="#FFD93D" />
        <path
          d="M48 6l1-2 1 2 2 1-2 1-1 2-1-2-2-1z"
          fill="#FFD93D"
          opacity="0.7"
        />
        <path
          d="M40 10l.7-1.5.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7z"
          fill="#FF8FA8"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    name: "Travelling",
    desc: "Collecting stories from unfamiliar roads and mountain treks, dreaming of seeing the whole world",
    color: "peach",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* mountain */}
        <path
          d="M4 54l18-34 8 12 6-8 24 30z"
          fill="#A8C5A0"
          stroke="#7BA370"
          strokeWidth="1.5"
        />
        <path d="M22 20l-4 8 8 0z" fill="white" opacity="0.6" />
        <path d="M36 24l-2 4h4z" fill="white" opacity="0.5" />
        {/* sun */}
        <circle
          cx="50"
          cy="14"
          r="7"
          fill="#FFD93D"
          stroke="#E8A817"
          strokeWidth="1.2"
        />
        <line
          x1="50"
          y1="4"
          x2="50"
          y2="2"
          stroke="#E8A817"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="24"
          x2="50"
          y2="26"
          stroke="#E8A817"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="14"
          x2="38"
          y2="14"
          stroke="#E8A817"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="60"
          y1="14"
          x2="62"
          y2="14"
          stroke="#E8A817"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="43"
          y1="7"
          x2="41"
          y2="5"
          stroke="#E8A817"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="57"
          y1="21"
          x2="59"
          y2="23"
          stroke="#E8A817"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="57"
          y1="7"
          x2="59"
          y2="5"
          stroke="#E8A817"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="43"
          y1="21"
          x2="41"
          y2="23"
          stroke="#E8A817"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* tiny plane */}
        <path d="M8 10l6-2-2 3 8 1-8 1 2 3z" fill="#74C0FC" opacity="0.7" />
        {/* clouds */}
        <ellipse cx="14" cy="16" rx="6" ry="3" fill="white" opacity="0.7" />
        <ellipse cx="18" cy="15" rx="4" ry="2.5" fill="white" opacity="0.7" />
        {/* path/trail */}
        <path
          d="M30 54 Q32 46 28 42 Q24 38 28 34"
          stroke="#8B7355"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="2 3"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

const bgPatterns = [
  "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,107,138,0.06) 8px, rgba(255,107,138,0.06) 16px)",
  "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(168,197,160,0.08) 8px, rgba(168,197,160,0.08) 16px)",
  "radial-gradient(circle at 20% 80%, rgba(195,174,214,0.1) 0%, transparent 50%)",
  "repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(168,216,234,0.06) 12px, rgba(168,216,234,0.06) 13px)",
  "repeating-linear-gradient(60deg, transparent, transparent 10px, rgba(245,199,169,0.07) 10px, rgba(245,199,169,0.07) 18px)",
];

const tapeStyles = [
  {
    bg: "linear-gradient(135deg, #FFD93D, #FFE88A)",
    rot: "-3deg",
    left: "20px",
  },
  {
    bg: "linear-gradient(135deg, #A8C5A0, #C8E6C0)",
    rot: "4deg",
    left: "auto",
    right: "15px",
  },
  {
    bg: "repeating-linear-gradient(45deg, rgba(195,174,214,0.7), rgba(195,174,214,0.7) 4px, rgba(221,208,236,0.5) 4px, rgba(221,208,236,0.5) 8px)",
    rot: "-2deg",
    left: "25px",
  },
  {
    bg: "linear-gradient(135deg, #74C0FC, #A5D8FF)",
    rot: "3deg",
    left: "auto",
    right: "20px",
  },
  {
    bg: "linear-gradient(135deg, #F5C7A9, #FDE8D6)",
    rot: "-4deg",
    left: "18px",
  },
];

export default function Interests() {
  return (
    <section className="interests-section" id="interests">
      <div className="section-header scroll-reveal">
        <h2 className="section-title">Interests</h2>
        <p className="section-subtitle">
          proof that I have a life outside my laptop
        </p>
      </div>

      <div className="int-scrapbook">
        {interests.map((interest, i) => (
          <div className={`int-card int-card-${i + 1} scroll-reveal`} key={i}>
            {/* Washi tape */}
            <div
              className="int-tape"
              style={{
                background: tapeStyles[i].bg,
                transform: `rotate(${tapeStyles[i].rot})`,
                left: tapeStyles[i].left || "auto",
                right: tapeStyles[i].right || "auto",
              }}
            />

            {/* Inner pattern */}
            <div
              className="int-pattern"
              style={{ backgroundImage: bgPatterns[i] }}
            />

            {/* SVG illustration */}
            <div className="int-illustration">{interest.svg}</div>

            {/* Content */}
            <h3 className="int-name">{interest.name}</h3>
            <p className="int-desc">{interest.desc}</p>

            {/* Decorative pin */}
            <div className={`int-pin int-pin-${interest.color}`} />

            {/* Doodle underline */}
            <svg
              className="int-underline"
              width="80"
              height="8"
              viewBox="0 0 80 8"
            >
              <path
                d="M2 5 Q20 1 40 5 Q60 9 78 4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
