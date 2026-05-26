import React, { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'spring-pets'
const HEART_CHARS = ['♡', '🐾', '✧', '♥', '❤']
const HEART_COLORS = ['#FF6B8A', '#E8A0BF', '#FFD93D', '#F5C7A9', '#C3AED6']

function DogIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" className="spring-dog-svg">
      <ellipse cx="18" cy="34" rx="11" ry="17" fill="#C49A5C" transform="rotate(-15 18 34)" />
      <ellipse cx="62" cy="34" rx="11" ry="17" fill="#C49A5C" transform="rotate(15 62 34)" />
      <ellipse cx="40" cy="44" rx="26" ry="24" fill="#D4A96A" />
      <ellipse cx="40" cy="48" rx="18" ry="14" fill="#E8C88A" />
      <ellipse cx="32" cy="40" rx="3.5" ry="4" fill="#3c2f2f" />
      <ellipse cx="33.2" cy="38.8" rx="1.5" ry="1.5" fill="white" />
      <ellipse cx="48" cy="40" rx="3.5" ry="4" fill="#3c2f2f" />
      <ellipse cx="49.2" cy="38.8" rx="1.5" ry="1.5" fill="white" />
      <ellipse cx="40" cy="49" rx="5" ry="3.5" fill="#3c2f2f" />
      <ellipse cx="39.5" cy="48.2" rx="1.8" ry="1" fill="#5a4a4a" />
      <path d="M36 52 Q40 56 44 52" fill="none" stroke="#3c2f2f" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="40" cy="56" rx="3.5" ry="4.5" fill="#FF8FA8" />
    </svg>
  )
}

function SpringPage({ onClose, petCount, onPet, hearts, bouncing }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="spring-overlay" onClick={onClose}>
      <div className="spring-page" onClick={e => e.stopPropagation()}>
        <button className="spring-back" onClick={onClose}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 3L5 9l7 6" />
          </svg>
          back to portfolio
        </button>

        <div className="spring-page-content">
          <div className="spring-header-area">
            <h1 className="spring-page-title">Spring</h1>
            <p className="spring-page-subtitle">the goodest girl in the whole world</p>
            <svg className="spring-squiggle" width="120" height="10" viewBox="0 0 120 10">
              <path d="M2 5 Q10 0 20 5 Q30 10 40 5 Q50 0 60 5 Q70 10 80 5 Q90 0 100 5 Q110 10 118 5" fill="none" stroke="var(--rose)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="spring-photo-row">
            <div className="spring-polaroid spring-pol-1">
              <div className="spring-pol-tape" style={{ background: 'linear-gradient(135deg, #FFD93D, #FFE88A)' }} />
              <div className="spring-pol-img">
                <img src={`${import.meta.env.BASE_URL}spring-birthday.jpg`} alt="Spring's 5th birthday" />
              </div>
              <p className="spring-pol-caption">happy 5th birthday, Springy!</p>
            </div>
          </div>

          <div className="spring-desc-card">
            <div className="spring-desc-tape" style={{ background: 'repeating-linear-gradient(45deg, var(--tape-pink), var(--tape-pink) 5px, rgba(255,180,210,0.4) 5px, rgba(255,180,210,0.4) 10px)' }} />
            <p>
              She is Spring, a 5-year-old female Labrador with the sweetest soul and the biggest appetite.
              Living with her two loving sisters, a disciplining mom, and a caring dad, she's truly the
              heart of our home and the reason behind most of our smiles. Springy absolutely adores
              bananas, treats, and honestly... just about anything edible she can get her paws on.
            </p>
            <p>
              She's affectionate, playful, and full of love, but only for the humans she truly knows
              and trusts. Strangers? Not exactly her favorite people. She firmly believes all attention
              should belong to her, especially when I spend too much time on my laptop instead of cuddling her.
            </p>
            <p>
              Her happiest moments are the simplest ones: curling up beside me, asking for endless love,
              and peacefully falling asleep on my lap without a single worry in the world. And honestly,
              watching her sleep so carefree might just be my favorite feeling ever.
            </p>
            <p className="spring-since">Making our home warmer, happier, and fuller of love since 2021</p>
          </div>

          <div className="spring-photo-row">
            <div className="spring-polaroid spring-pol-2">
              <div className="spring-pol-tape" style={{ background: 'linear-gradient(135deg, #FF8FA8, #FFB6C8)' }} />
              <div className="spring-pol-img">
                <img src={`${import.meta.env.BASE_URL}spring-together.jpg`} alt="Me and Spring" />
              </div>
              <p className="spring-pol-caption">my forever cuddle buddy</p>
            </div>
          </div>

          <div className="spring-pet-area">
            <p className="spring-pet-prompt">give Spring some love!</p>
            <div className="sparkle-btn-wrapper">
              <button
                className={`spring-pet-btn ${bouncing ? 'sparkle-bounce' : ''}`}
                onClick={onPet}
                aria-label="Pet Spring"
              >
                <span className="spring-paw-icon">🐾</span>
                <span>pet Spring</span>
              </button>
              {hearts.map(h => (
                <span
                  key={h.id}
                  className="sparkle-particle"
                  style={{
                    color: h.color,
                    fontSize: `${h.size}px`,
                    '--tx': `${h.dx}px`,
                    '--ty': `${h.dy}px`,
                    animationDelay: `${h.delay}s`,
                  }}
                >
                  {h.char}
                </span>
              ))}
            </div>
            <p className="spring-pet-count">
              {petCount === 0
                ? 'be the first to pet her!'
                : <>Spring has received <span className="sparkle-number">{petCount}</span> pet{petCount !== 1 ? 's' : ''}!</>
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SparkleCounter() {
  const [count, setCount] = useState(() => {
    try {
      return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10)
    } catch {
      return 0
    }
  })
  const [showPage, setShowPage] = useState(false)
  const [hearts, setHearts] = useState([])
  const [bouncing, setBouncing] = useState(false)

  const handlePet = useCallback(() => {
    const newHearts = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2 + (Math.random() - 0.5) * 0.6
      const distance = 40 + Math.random() * 60
      return {
        id: Date.now() + i + Math.random(),
        char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance - 20,
        size: 12 + Math.random() * 14,
        delay: Math.random() * 0.2,
      }
    })

    setHearts(prev => [...prev, ...newHearts])
    setCount(prev => {
      const next = prev + 1
      try { localStorage.setItem(STORAGE_KEY, next.toString()) } catch {}
      return next
    })
    setBouncing(true)
    setTimeout(() => setBouncing(false), 500)
    setTimeout(() => {
      setHearts(prev => prev.slice(8))
    }, 1200)
  }, [])

  return (
    <>
      <section className="sparkle-section">
        <div
          className="sparkle-card scroll-reveal"
          onClick={() => setShowPage(true)}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setShowPage(true)}
        >
          <div className="sparkle-tape" />
          <div className="sparkle-pin" />

          <div className="spring-card-icon">
            <DogIcon />
          </div>

          <p className="sparkle-title">Meet Spring</p>
          <p className="sparkle-count">tap to meet the goodest girl</p>

          <div className="sparkle-corner" />
        </div>
      </section>

      {showPage && (
        <SpringPage
          onClose={() => setShowPage(false)}
          petCount={count}
          onPet={handlePet}
          hearts={hearts}
          bouncing={bouncing}
        />
      )}
    </>
  )
}
