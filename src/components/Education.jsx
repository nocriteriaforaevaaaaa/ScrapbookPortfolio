import React from 'react'

function UniversitySVG() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M36 6L6 22l30 16 30-16z" fill="#C3AED6" opacity="0.3" stroke="#9B86BD" strokeWidth="1.5"/>
      <rect x="14" y="30" width="44" height="28" fill="white" stroke="#9B86BD" strokeWidth="1.2"/>
      <rect x="18" y="34" width="8" height="12" rx="1" fill="#C3AED6" opacity="0.4" stroke="#9B86BD" strokeWidth="0.8"/>
      <rect x="32" y="34" width="8" height="12" rx="1" fill="#C3AED6" opacity="0.4" stroke="#9B86BD" strokeWidth="0.8"/>
      <rect x="46" y="34" width="8" height="12" rx="1" fill="#C3AED6" opacity="0.4" stroke="#9B86BD" strokeWidth="0.8"/>
      <rect x="28" y="48" width="16" height="10" rx="1" fill="#9B86BD" opacity="0.3"/>
      <rect x="10" y="58" width="52" height="4" rx="1" fill="#9B86BD" opacity="0.4"/>
      <path d="M36 6v-0" stroke="#9B86BD" strokeWidth="0"/>
      <line x1="36" y1="6" x2="36" y2="2" stroke="#9B86BD" strokeWidth="1.5"/>
      <path d="M34 2h4" stroke="#9B86BD" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M62 20l1-2 1 2 2 1-2 1-1 2-1-2-2-1z" fill="#FFD93D"/>
      <path d="M8 14l.7-1.5.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7z" fill="#FF8FA8" opacity="0.6"/>
    </svg>
  )
}

function CollegeSVG() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="12" y="20" width="48" height="38" rx="3" fill="white" stroke="#5B8BA0" strokeWidth="1.5"/>
      <rect x="12" y="20" width="48" height="10" rx="3" fill="#A8D8EA" opacity="0.3"/>
      <line x1="18" y1="36" x2="54" y2="36" stroke="#5B8BA0" strokeWidth="1" opacity="0.3"/>
      <line x1="18" y1="42" x2="54" y2="42" stroke="#5B8BA0" strokeWidth="1" opacity="0.3"/>
      <line x1="18" y1="48" x2="42" y2="48" stroke="#5B8BA0" strokeWidth="1" opacity="0.3"/>
      <circle cx="36" cy="25" r="3" fill="#5B8BA0" opacity="0.4"/>
      <path d="M16 58l4-6h32l4 6" stroke="#5B8BA0" strokeWidth="1.2" fill="none"/>
      <rect x="30" y="12" width="12" height="8" rx="1" fill="#FFD93D" opacity="0.4" stroke="#E8A817" strokeWidth="1"/>
      <path d="M33 14l3 3 3-3" stroke="#E8A817" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M58 12l1-2 1 2 2 1-2 1-1 2-1-2-2-1z" fill="#FFD93D"/>
    </svg>
  )
}

function SchoolSVG() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="24" width="56" height="36" rx="3" fill="white" stroke="#7BA370" strokeWidth="1.5"/>
      <rect x="8" y="24" width="56" height="8" fill="#A8C5A0" opacity="0.3" rx="3"/>
      <path d="M28 24V16l8-6 8 6v8" fill="#A8C5A0" opacity="0.2" stroke="#7BA370" strokeWidth="1.2"/>
      <circle cx="36" cy="16" r="2" fill="#7BA370" opacity="0.5"/>
      <rect x="16" y="38" width="10" height="14" rx="1" fill="#A8C5A0" opacity="0.2" stroke="#7BA370" strokeWidth="0.8"/>
      <rect x="46" y="38" width="10" height="14" rx="1" fill="#A8C5A0" opacity="0.2" stroke="#7BA370" strokeWidth="0.8"/>
      <rect x="30" y="42" width="12" height="18" rx="1" fill="#7BA370" opacity="0.25"/>
      <circle cx="38" cy="52" r="1.5" fill="#7BA370" opacity="0.5"/>
      <path d="M8 60h56" stroke="#7BA370" strokeWidth="1.5"/>
      <path d="M10 16l.7-1.5.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7z" fill="#FFD93D"/>
      <path d="M58 18l1-2 1 2 2 1-2 1-1 2-1-2-2-1z" fill="#FF8FA8" opacity="0.5"/>
    </svg>
  )
}

const education = [
  {
    school: 'Pulchowk Campus (IOE)',
    degree: 'B.E. in Electronics, Communication & Information Engineering',
    date: 'Dec 2022 - Present',
    location: 'Lalitpur, Nepal',
    svg: <UniversitySVG />,
    color: '#9B86BD',
    bgLight: 'rgba(195,174,214,0.06)',
    tape: 'linear-gradient(135deg, #C3AED6, #DDD0EC)',
    label: 'ongoing',
  },
  {
    school: "Little Angels' College",
    degree: 'Higher Secondary (+2), Physics Stream',
    date: 'Oct 2020 - May 2022',
    location: 'Hattiban, Nepal',
    svg: <CollegeSVG />,
    color: '#5B8BA0',
    bgLight: 'rgba(168,216,234,0.06)',
    tape: 'linear-gradient(135deg, #74C0FC, #A5D8FF)',
    label: null,
  },
  {
    school: 'Bal Deekshya Sadan',
    degree: 'Secondary Education Examination',
    date: 'Aug 2020',
    location: 'Gwarko, Nepal',
    svg: <SchoolSVG />,
    color: '#7BA370',
    bgLight: 'rgba(168,197,160,0.06)',
    tape: 'linear-gradient(135deg, #A8C5A0, #C8E6C0)',
    label: null,
  },
]

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-header scroll-reveal">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">the classrooms that shaped me (and the ones I slept through)</p>
      </div>

      <div className="edu-timeline">
        {/* Vertical dashed line */}
        <div className="edu-line" />

        {education.map((edu, i) => (
          <div className={`edu-item edu-item-${i + 1} scroll-reveal`} key={i}>
            {/* Timeline dot */}
            <div className="edu-dot" style={{ background: edu.color, boxShadow: `0 0 0 4px ${edu.color}22` }} />

            {/* Card */}
            <div className="edu-card-new" style={{ borderTop: `4px solid ${edu.color}`, background: `linear-gradient(180deg, ${edu.bgLight}, white)` }}>
              {/* Tape - not on every card */}
              {i !== 1 && <div className="edu-tape-new" style={{ background: edu.tape }} />}

              {/* Label badge */}
              {edu.label && (
                <div className="edu-label" style={{ background: edu.color }}>
                  {edu.label}
                </div>
              )}

              <div className="edu-card-inner">
                {/* SVG */}
                <div className="edu-svg-wrap">
                  {edu.svg}
                </div>

                {/* Info */}
                <div className="edu-details">
                  <h3 className="edu-school-new">{edu.school}</h3>

                  <svg className="edu-squiggle" width="60" height="6" viewBox="0 0 60 6">
                    <path d="M1 3 Q10 0 20 3 Q30 6 40 3 Q50 0 59 3" stroke={edu.color} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4"/>
                  </svg>

                  <p className="edu-degree-new">{edu.degree}</p>

                  <div className="edu-meta">
                    <span className="edu-date-badge" style={{ background: `${edu.color}18`, color: edu.color, border: `1px solid ${edu.color}33` }}>
                      {edu.date}
                    </span>
                    <span className="edu-location-new">{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Corner fold - only on first */}
              {i === 0 && <div className="edu-corner" />}

              {/* Pin - only on last */}
              {i === 2 && <div className="edu-pin" style={{ background: edu.color }} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
