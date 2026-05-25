import React from 'react'

function MailSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="6" width="28" height="20" rx="3" fill="white" stroke="#FF6B8A" strokeWidth="1.5"/>
      <path d="M2 9l14 10 14-10" stroke="#FF6B8A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M2 26l10-8" stroke="#FF6B8A" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
      <path d="M30 26l-10-8" stroke="#FF6B8A" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
    </svg>
  )
}

function LinkedInSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#0A66C2" opacity="0.12" stroke="#0A66C2" strokeWidth="1.2"/>
      <rect x="7" y="14" width="4" height="12" rx="1" fill="#0A66C2" opacity="0.7"/>
      <circle cx="9" cy="9" r="2.5" fill="#0A66C2" opacity="0.7"/>
      <path d="M15 14v12h4v-6c0-2 1-3 3-3s2 1 2 3v6h4V19c0-4-2-6-5-6s-4 1-4 1v-0z" fill="#0A66C2" opacity="0.7"/>
    </svg>
  )
}

function GitHubSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#3c2f2f" opacity="0.08" stroke="#3c2f2f" strokeWidth="1.2"/>
      <path d="M16 4C9.4 4 4 9.4 4 16c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C24.6 25.8 28 21.3 28 16c0-6.6-5.4-12-12-12z" fill="#3c2f2f" opacity="0.6"/>
    </svg>
  )
}

function LocationSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 2C10.5 2 6 6.5 6 12c0 8 10 18 10 18s10-10 10-18c0-5.5-4.5-10-10-10z" fill="#FF6B8A" opacity="0.15" stroke="#FF6B8A" strokeWidth="1.5"/>
      <circle cx="16" cy="12" r="4" fill="#FF6B8A" opacity="0.4" stroke="#FF6B8A" strokeWidth="1"/>
    </svg>
  )
}

const links = [
  { svg: <MailSVG />, label: 'aevaacharya9@gmail.com', href: 'mailto:aevaacharya9@gmail.com', color: '#FF6B8A' },
  { svg: <LinkedInSVG />, label: 'Aeva Acharya', href: 'https://linkedin.com/in/aeva-acharya', color: '#0A66C2' },
  { svg: <GitHubSVG />, label: 'nocriteriaforaevaaaaa', href: 'https://github.com/nocriteriaforaevaaaaa', color: '#3c2f2f' },
  { svg: <LocationSVG />, label: 'Imadol, Lalitpur, Nepal', href: null, color: '#FF6B8A' },
]

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header scroll-reveal">
        <h2 className="section-title">Say Hi!</h2>
        <p className="section-subtitle">I promise I reply (eventually)</p>
      </div>

      <div className="cnt-wrapper scroll-reveal">
        {/* Left postcard */}
        <div className="cnt-postcard">
          <div className="cnt-postcard-tape" />

          {/* Postcard stamp */}
          <div className="cnt-stamp">
            <svg width="56" height="56" viewBox="0 0 56 56">
              <rect x="2" y="2" width="52" height="52" rx="2" fill="#FDE8D6" stroke="#C4956A" strokeWidth="1.5" strokeDasharray="3 2"/>
              <path d="M18 38l10-22 10 22" stroke="#C4956A" strokeWidth="1.5" fill="none"/>
              <circle cx="28" cy="22" r="4" fill="#FFD93D" opacity="0.5"/>
              <path d="M14 42h28" stroke="#C4956A" strokeWidth="1" opacity="0.4"/>
            </svg>
          </div>

          <p className="cnt-message">
            Got an idea? Want to build something cool together? Or just want to talk about suspense novels? I'm in.
          </p>

          <svg className="cnt-squiggle" width="120" height="8" viewBox="0 0 120 8">
            <path d="M2 4 Q15 0 30 4 Q45 8 60 4 Q75 0 90 4 Q105 8 118 4" stroke="var(--rose)" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.3"/>
          </svg>

          <p className="cnt-tagline">p.s. I check my email way too often</p>
        </div>

        {/* Right links */}
        <div className="cnt-links-board">
          {links.map((link, i) => {
            const Tag = link.href ? 'a' : 'div'
            const props = link.href ? { href: link.href, target: link.href.startsWith('http') ? '_blank' : undefined, rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {}
            return (
              <Tag className={`cnt-link cnt-link-${i + 1}`} key={i} {...props}>
                <div className="cnt-link-icon">
                  {link.svg}
                </div>
                <div className="cnt-link-info">
                  <span className="cnt-link-label">{link.label}</span>
                  {i % 2 === 0 && (
                    <svg width="40" height="4" viewBox="0 0 40 4">
                      <path d="M1 2 Q10 0 20 2 Q30 4 39 2" stroke={link.color} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </svg>
                  )}
                </div>
                <div className="cnt-link-arrow">
                  {link.href && (
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M4 12L12 4M12 4H6M12 4v6" stroke={link.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                    </svg>
                  )}
                </div>
                {/* Pin - not on every link */}
                {(i === 0 || i === 2) && <div className="cnt-link-pin" style={{ background: link.color }} />}
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
