import React from 'react'

export default function RetroDecorations() {
  return (
    <>
      {/* ---- Retro Browser Window (top-right, floating) ---- */}
      <div className="retro-browser retro-browser-1">
        <div className="retro-browser-bar">
          <span className="retro-dot red" />
          <span className="retro-dot yellow" />
          <span className="retro-dot green" />
          <span className="retro-browser-title">portfolio.exe</span>
        </div>
        <div className="retro-browser-body">
          <div className="retro-address-bar">
            <span className="retro-arrow">&larr;</span>
            <span className="retro-arrow">&rarr;</span>
            <span className="retro-url-bar">aeva-acharya.dev</span>
          </div>
        </div>
      </div>

      {/* ---- Retro Search Bar (left side) ---- */}
      <div className="retro-search retro-search-1">
        <span className="retro-search-icon">&#128269;</span>
        <span className="retro-search-text">Search...</span>
        <span className="retro-search-cursor">|</span>
      </div>

      {/* ---- Floating Retro Icons ---- */}
      <div className="retro-icon retro-icon-folder">
        <svg width="40" height="35" viewBox="0 0 40 35">
          <path d="M2 8 L2 32 L38 32 L38 8 Z" fill="#FFD93D" stroke="#E8A817" strokeWidth="1.5"/>
          <path d="M2 8 L14 8 L17 3 L2 3 Z" fill="#FFD93D" stroke="#E8A817" strokeWidth="1.5"/>
          <path d="M2 12 L38 12" stroke="#E8A817" strokeWidth="0.5" opacity="0.4"/>
        </svg>
        <span className="retro-icon-label">Files</span>
      </div>

      <div className="retro-icon retro-icon-computer">
        <svg width="44" height="40" viewBox="0 0 44 40">
          <rect x="4" y="2" width="36" height="26" rx="2" fill="#B8D4E3" stroke="#5B8BA0" strokeWidth="1.5"/>
          <rect x="8" y="6" width="28" height="18" rx="1" fill="#E8F4FD" stroke="#5B8BA0" strokeWidth="1"/>
          <rect x="16" y="28" width="12" height="4" fill="#C0C0C0" stroke="#888" strokeWidth="0.5"/>
          <rect x="10" y="32" width="24" height="3" rx="1" fill="#C0C0C0" stroke="#888" strokeWidth="0.5"/>
          <circle cx="22" cy="15" r="3" fill="#5B8BA0" opacity="0.6"/>
        </svg>
        <span className="retro-icon-label">computer</span>
      </div>

      <div className="retro-icon retro-icon-hourglass">
        <svg width="28" height="38" viewBox="0 0 28 38">
          <rect x="4" y="2" width="20" height="3" rx="1" fill="#C0A060" stroke="#8B7040" strokeWidth="1"/>
          <rect x="4" y="33" width="20" height="3" rx="1" fill="#C0A060" stroke="#8B7040" strokeWidth="1"/>
          <path d="M6 5 Q6 18 14 19 Q22 18 22 5" fill="#FFE4B5" stroke="#C0A060" strokeWidth="1.2"/>
          <path d="M6 33 Q6 20 14 19 Q22 20 22 33" fill="#FFE4B5" stroke="#C0A060" strokeWidth="1.2"/>
          <path d="M10 8 Q10 16 14 17 Q18 16 18 8" fill="#F5C77D" opacity="0.5"/>
        </svg>
      </div>

      {/* ---- Retro Smiley ---- */}
      <div className="retro-smiley retro-smiley-1">
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" fill="#FFD93D" stroke="#E8A817" strokeWidth="1.5"/>
          <circle cx="12" cy="14" r="2" fill="#3c2f2f"/>
          <circle cx="24" cy="14" r="2" fill="#3c2f2f"/>
          <path d="M10 22 Q18 28 26 22" stroke="#3c2f2f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="retro-smiley retro-smiley-2">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="13" fill="#FFB6C1" stroke="#E8819E" strokeWidth="1.5"/>
          <circle cx="10" cy="12" r="1.5" fill="#3c2f2f"/>
          <circle cx="20" cy="12" r="1.5" fill="#3c2f2f"/>
          <path d="M9 18 Q15 23 21 18" stroke="#3c2f2f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ---- Retro Heart ---- */}
      <div className="retro-heart">
        <svg width="40" height="38" viewBox="0 0 40 38">
          <path d="M20 35 C10 28 0 20 0 12 C0 5 5 0 12 0 C16 0 19 2 20 5 C21 2 24 0 28 0 C35 0 40 5 40 12 C40 20 30 28 20 35Z" fill="#FF6B8A" stroke="#E8456A" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="5" ry="4" fill="white" opacity="0.3" transform="rotate(-20 12 12)"/>
          <circle cx="25" cy="18" r="2" fill="#3c2f2f" opacity="0.2"/>
          <circle cx="28" cy="16" r="1.5" fill="#3c2f2f" opacity="0.15"/>
          <path d="M15 20 Q20 24 25 20" stroke="#E8456A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>

      {/* ---- Retro Rainbow ---- */}
      <div className="retro-rainbow">
        <svg width="70" height="40" viewBox="0 0 70 40">
          <path d="M5 38 Q5 5 35 5 Q65 5 65 38" stroke="#FF6B6B" strokeWidth="3" fill="none"/>
          <path d="M10 38 Q10 10 35 10 Q60 10 60 38" stroke="#FFA94D" strokeWidth="3" fill="none"/>
          <path d="M15 38 Q15 15 35 15 Q55 15 55 38" stroke="#FFD93D" strokeWidth="3" fill="none"/>
          <path d="M20 38 Q20 20 35 20 Q50 20 50 38" stroke="#69DB7C" strokeWidth="3" fill="none"/>
          <path d="M25 38 Q25 25 35 25 Q45 25 45 38" stroke="#74C0FC" strokeWidth="3" fill="none"/>
          {/* Clouds */}
          <ellipse cx="8" cy="36" rx="8" ry="5" fill="white" stroke="#ddd" strokeWidth="0.5"/>
          <ellipse cx="62" cy="36" rx="8" ry="5" fill="white" stroke="#ddd" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* ---- Retro Notification Badges ---- */}
      <div className="retro-notif retro-notif-1">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <rect x="1" y="1" width="26" height="26" rx="5" fill="#FF6B8A" stroke="#E8456A" strokeWidth="1"/>
          <path d="M8 10 L14 16 L20 8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="retro-notif retro-notif-2">
        <svg width="26" height="30" viewBox="0 0 26 30">
          <rect x="2" y="2" width="22" height="26" rx="2" fill="white" stroke="#888" strokeWidth="1"/>
          <line x1="6" y1="8" x2="20" y2="8" stroke="#ccc" strokeWidth="1.5"/>
          <line x1="6" y1="13" x2="20" y2="13" stroke="#ccc" strokeWidth="1.5"/>
          <line x1="6" y1="18" x2="16" y2="18" stroke="#ccc" strokeWidth="1.5"/>
          <path d="M4 2 L4 6 L8 2 Z" fill="#FFD93D" stroke="#E8A817" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* ---- Retro Sparkles ---- */}
      <div className="retro-sparkle retro-sparkle-1">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="#FFD93D" stroke="#E8A817" strokeWidth="0.5"/>
        </svg>
      </div>
      <div className="retro-sparkle retro-sparkle-2">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="#74C0FC" stroke="#4DABF7" strokeWidth="0.5"/>
        </svg>
      </div>
      <div className="retro-sparkle retro-sparkle-3">
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="#FF6B8A" stroke="#E8456A" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* ---- Retro Cursor ---- */}
      <div className="retro-cursor">
        <svg width="22" height="28" viewBox="0 0 22 28">
          <path d="M2 1 L2 22 L7 17 L12 25 L15 23 L10 15 L17 15 Z" fill="white" stroke="#3c2f2f" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* ---- Grid paper background patch ---- */}
      <div className="retro-grid-patch retro-grid-1" />
      <div className="retro-grid-patch retro-grid-2" />
    </>
  )
}
