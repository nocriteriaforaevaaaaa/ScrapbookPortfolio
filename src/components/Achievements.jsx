import React from 'react'

const achievements = [
  {
    text: 'Winner of LOCUS Hack-A-Week 2026 in EdTech track',
    type: 'trophy',
  },
  {
    text: 'Ambassador of ANAIS (All Nepal AI School) - 2025',
    type: 'star',
  },
  {
    text: 'Top 30 out of 850 for Seeds for the Future 2025 (Huawei Nepal)',
    type: 'medal',
  },
  {
    text: 'Top 10 in Mathematics Olympiad by All Nepal Mathematics Association',
    type: 'math',
  },
  {
    text: '3rd Place in National Essay Writing Competition',
    type: 'pen',
  },
  {
    text: 'Awarded for Exceptional Academic Performance in School',
    type: 'star',
  },
]

function TrophySVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M14 8h20v4c0 8-4 14-10 16-6-2-10-8-10-16V8z" fill="#FFD93D" stroke="#C9A020" strokeWidth="1.5"/>
      <rect x="20" y="28" width="8" height="6" rx="1" fill="#C9A020"/>
      <rect x="16" y="34" width="16" height="4" rx="2" fill="#E8A817"/>
      <path d="M14 8H8c0 6 2 10 6 12" stroke="#C9A020" strokeWidth="1.5" fill="none"/>
      <path d="M34 8h6c0 6-2 10-6 12" stroke="#C9A020" strokeWidth="1.5" fill="none"/>
      <ellipse cx="24" cy="14" rx="4" ry="3" fill="#FFF3B0" opacity="0.6"/>
    </svg>
  )
}

function StarSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M24 4l5.5 11.2 12.3 1.8-8.9 8.7 2.1 12.3L24 32l-11 5.8 2.1-12.3-8.9-8.7 12.3-1.8z" fill="#FF6B8A" stroke="#D44A6A" strokeWidth="1.2"/>
      <path d="M24 10l3 6.2 6.8 1-4.9 4.8 1.2 6.8L24 25.6l-6.1 3.2 1.2-6.8-4.9-4.8 6.8-1z" fill="#FF8FA8" opacity="0.5"/>
    </svg>
  )
}

function MedalSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M18 4l-4 16h6l4-16z" fill="#74C0FC" stroke="#4A9AD4" strokeWidth="1"/>
      <path d="M30 4l4 16h-6l-4-16z" fill="#74C0FC" stroke="#4A9AD4" strokeWidth="1"/>
      <circle cx="24" cy="30" r="12" fill="#FFD93D" stroke="#C9A020" strokeWidth="1.5"/>
      <circle cx="24" cy="30" r="8" fill="#FFF3B0" stroke="#C9A020" strokeWidth="1"/>
      <path d="M24 24l1.5 3 3.5.5-2.5 2.5.6 3.5L24 31.5l-3.1 2 .6-3.5-2.5-2.5 3.5-.5z" fill="#C9A020"/>
    </svg>
  )
}

function MathSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="6" width="36" height="36" rx="4" fill="#C3AED6" stroke="#9B86BD" strokeWidth="1.5"/>
      <text x="24" y="22" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="10" fill="white" fontWeight="700">x+y</text>
      <text x="24" y="36" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="11" fill="white" fontWeight="700">=z</text>
      <circle cx="38" cy="10" r="6" fill="#FFD93D" stroke="#C9A020" strokeWidth="1"/>
      <text x="38" y="13" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="8" fill="#3c2f2f" fontWeight="700">#1</text>
    </svg>
  )
}

function PenSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M32 6l6 6-22 22-8 2 2-8z" fill="#F5C7A9" stroke="#C4956A" strokeWidth="1.5"/>
      <path d="M32 6l6 6-2 2-6-6z" fill="#C4956A"/>
      <path d="M10 36l2-8 6 6z" fill="#FFE4B5"/>
      <path d="M10 36l1-3" stroke="#C4956A" strokeWidth="1"/>
    </svg>
  )
}

const iconMap = { trophy: TrophySVG, star: StarSVG, medal: MedalSVG, math: MathSVG, pen: PenSVG }

const tapeColors = [
  'linear-gradient(135deg, #FFD93D 0%, #FFE88A 100%)',
  'linear-gradient(135deg, #FF8FA8 0%, #FFB6C8 100%)',
  'linear-gradient(135deg, #74C0FC 0%, #A5D8FF 100%)',
  'linear-gradient(135deg, #A8C5A0 0%, #C8E6C0 100%)',
  'linear-gradient(135deg, #C3AED6 0%, #DDD0EC 100%)',
  'linear-gradient(135deg, #F5C7A9 0%, #FDE8D6 100%)',
]

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="section-header scroll-reveal">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">ok I'm allowed to brag a little right?</p>
      </div>

      <div className="achieve-board scroll-reveal">
        <div className="achieve-board-inner">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.type] || StarSVG
            return (
              <div className={`achieve-card achieve-card-${i + 1}`} key={i}>
                {/* Tape strip - skip on some */}
                {i !== 3 && <div className="achieve-tape" style={{ background: tapeColors[i] }} />}

                {/* Sticker badge - skip on some */}
                {i !== 1 && i !== 4 && (
                  <div className={`achieve-sticker achieve-sticker-${(i % 4) + 1}`}>
                    {a.sticker}
                  </div>
                )}

                {/* Icon */}
                <div className="achieve-icon-wrap">
                  <Icon />
                </div>

                {/* Text */}
                <p className="achieve-text">{a.text}</p>

                {/* Decorative stamp / doodle per card */}
                {i === 0 && (
                  <div className="achieve-stamp">
                    <svg width="50" height="50" viewBox="0 0 50 50">
                      <circle cx="25" cy="25" r="22" stroke="#D44A6A" strokeWidth="2" fill="none" strokeDasharray="3 3"/>
                      <text x="25" y="22" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="8" fill="#D44A6A">WINNER</text>
                      <text x="25" y="32" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="7" fill="#D44A6A">2026</text>
                    </svg>
                  </div>
                )}
                {i === 2 && (
                  <div className="achieve-ribbon">
                    <svg width="30" height="40" viewBox="0 0 30 40">
                      <path d="M5 0h20v30l-10-6-10 6z" fill="#74C0FC" opacity="0.4"/>
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
