import React, { useState } from 'react'

const cardColors = [
  { border: '#FF6B8A', bg: 'rgba(255,107,138,0.04)', tape: 'linear-gradient(135deg, #FF8FA8, #FFB6C8)' },
  { border: '#9B86BD', bg: 'rgba(195,174,214,0.04)', tape: 'linear-gradient(135deg, #C3AED6, #DDD0EC)' },
  { border: '#4A9AD4', bg: 'rgba(74,154,212,0.04)', tape: 'linear-gradient(135deg, #74C0FC, #A5D8FF)' },
  { border: '#C4956A', bg: 'rgba(245,199,169,0.04)', tape: 'linear-gradient(135deg, #F5C7A9, #FDE8D6)' },
  { border: '#5B8BA0', bg: 'rgba(168,216,234,0.04)', tape: 'linear-gradient(135deg, #74C0FC, #A5D8FF)' },
  { border: '#7BA370', bg: 'rgba(168,197,160,0.04)', tape: 'linear-gradient(135deg, #A8C5A0, #C8E6C0)' },
]

const projects = [
  {
    title: 'LabSathi',
    subtitle: 'Virtual Lab for Students',
    tech: ['React', 'Next.js', 'Three.js'],
    desc: 'A complete virtual laboratory where students can run experiments, visualize results, and learn by doing - no physical lab needed. Built to make quality STEM education accessible to every student in Nepal.',
    year: '2026',
    note: 'hackathon winner!',
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}demo-labsathi.mp4` },
  },
  {
    title: 'Sui Guestbook',
    subtitle: 'Blockchain-based Guestbook',
    tech: ['Move', 'Sui Blockchain'],
    desc: 'A decentralized guestbook where messages live on-chain forever. Learned Move from scratch for this one.',
    year: '2025',
    repo: 'https://github.com/nocriteriaforaevaaaaa/Sui-Guestbook',
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}demo-sui.mp4` },
  },
  {
    title: 'EduPerks',
    subtitle: 'Student Discount Platform',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    desc: 'A student discount verification platform for Nepal - OCR-powered ID verification connects students with exclusive merchant deals. Because students deserve more savings.',
    year: '2025',
    note: 'hackathon winner - fintech',
    repo: 'https://github.com/nocriteriaforaevaaaaa/EduPerks',
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}demo-eduperks.mp4` },
  },
  {
    title: 'RakshyaKawach',
    subtitle: 'Your Personal Safety App',
    tech: ['Next.js', 'Three.js'],
    desc: 'Built this because safety apps shouldn\'t be boring. Real-time location tracking with 3D visualization and emergency alerts.',
    year: '2024',
    note: 'personal favorite',
    repo: 'https://github.com/nocriteriaforaevaaaaa/RakshyaKawach',
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}demo-rakshya.mp4` },
  },
  {
    title: 'Virtual Drive',
    subtitle: 'File System Simulation',
    tech: ['C++', 'Qt'],
    desc: 'Simulated an entire file system from scratch - directories, files, navigation, the whole thing. Pure C++, no shortcuts.',
    year: '2024',
    repo: 'https://github.com/nocriteriaforaevaaaaa/virtual_drive',
    demo: { type: 'link', src: 'https://www.linkedin.com/posts/aevaacharya_made-a-secure-file-storage-virtual-drive-activity-7309455449232183296-o88l' },
  },
  {
    title: 'Rat Maze Solver',
    subtitle: 'Backtracking Algorithm',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Made backtracking actually fun to watch. Dynamic visualization that shows the algorithm thinking its way through a maze.',
    year: '2023',
    note: 'my first "real" project',
    repo: 'https://github.com/nocriteriaforaevaaaaa/ratmaze',
    demo: { type: 'gif', src: `${import.meta.env.BASE_URL}demo-ratmaze.gif` },
  },
]

function DemoModal({ demo, onClose }) {
  if (!demo) return null
  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-modal" onClick={e => e.stopPropagation()}>
        <button className="demo-close" onClick={onClose}>&times;</button>
        {demo.type === 'video' && (
          <video controls autoPlay playsInline className="demo-video">
            <source src={demo.src} type="video/mp4" />
          </video>
        )}
        {demo.type === 'gif' && (
          <img src={demo.src} alt="Demo" className="demo-gif" />
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState(null)

  return (
    <section className="projects-section" id="projects">
      <div className="section-header scroll-reveal">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">things I stayed up too late building</p>
      </div>

      <div className="proj-grid">
        {projects.map((project, i) => {
          const c = cardColors[i]
          return (
            <div className={`proj-card proj-card-${i + 1} scroll-reveal`} key={i} style={{ borderLeft: `4px solid ${c.border}` }}>
              {/* Tape */}
              <div className="proj-tape" style={{ background: c.tape }} />

              {/* Year stamp */}
              <div className="proj-year-stamp" style={{ borderColor: c.border, color: c.border }}>
                {project.year}
              </div>

              {/* Demo preview area */}
              <div className="proj-demo-area" style={{ background: c.bg }}>
                {project.demo?.type === 'video' && (
                  <div className="proj-demo-thumb" onClick={() => setActiveDemo(project.demo)}>
                    <video muted loop playsInline preload="metadata" className="proj-demo-preview">
                      <source src={project.demo.src} type="video/mp4" />
                    </video>
                    <div className="proj-play-btn">
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="15" fill="rgba(0,0,0,0.45)" stroke="white" strokeWidth="1.5"/>
                        <path d="M12 10l12 6-12 6z" fill="white"/>
                      </svg>
                    </div>
                    <span className="proj-demo-label">watch demo</span>
                  </div>
                )}
                {project.demo?.type === 'gif' && (
                  <div className="proj-demo-thumb" onClick={() => setActiveDemo(project.demo)}>
                    <img src={project.demo.src} alt="Demo" className="proj-demo-preview" />
                    <span className="proj-demo-label">see it in action</span>
                  </div>
                )}
                {project.demo?.type === 'link' && (
                  <a href={project.demo.src} target="_blank" rel="noopener noreferrer" className="proj-demo-thumb proj-demo-ext">
                    <div className="proj-play-btn">
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="15" fill="rgba(0,0,0,0.45)" stroke="white" strokeWidth="1.5"/>
                        <path d="M12 10l12 6-12 6z" fill="white"/>
                      </svg>
                    </div>
                    <span className="proj-demo-label">watch on LinkedIn</span>
                  </a>
                )}
                {!project.demo && (
                  <div className="proj-demo-empty">
                    <span>no demo yet</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="proj-content">
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-subtitle">{project.subtitle}</p>

                <div className="proj-tags">
                  {project.tech.map((t, j) => (
                    <span className="proj-tag" key={j} style={{
                      background: j % 3 === 0 ? 'var(--sage-light)' : j % 3 === 1 ? 'var(--peach-light)' : 'var(--lavender-light)'
                    }}>{t}</span>
                  ))}
                </div>

                <p className="proj-desc">{project.desc}</p>
                {project.note && <span className="proj-margin-note">{project.note}</span>}

                <div className="proj-links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="proj-repo-link" style={{ color: c.border }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      view code
                    </a>
                  )}
                </div>
              </div>

              {/* Corner fold - only on some cards */}
              {i % 3 !== 1 && <div className="proj-corner-fold" />}

              {/* Pin - alternate sides */}
              {i % 2 === 0 && <div className="proj-pin" style={{ background: c.border }} />}
            </div>
          )
        })}
      </div>

      {/* Demo modal */}
      <DemoModal demo={activeDemo} onClose={() => setActiveDemo(null)} />
    </section>
  )
}
