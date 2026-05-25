import React from 'react'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-header scroll-reveal">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">the long version (sorry not sorry)</p>
      </div>

      <div className="about-layout scroll-reveal">
        {/* Photo journey on the left */}
        <div className="about-photos">

          {/* Photo 1 - Park */}
          <div className="about-polaroid about-pol-1">
            <div className="about-pol-tape" style={{ background: 'linear-gradient(135deg, #FFD93D, #FFE88A)', left: '20px', transform: 'rotate(-3deg)' }} />
            <div className="about-pol-img">
              <img src="/photo3.jpg?v=2" alt="Aeva at the park" />
            </div>
            <div className="about-pol-caption">classic look back pose</div>
            {/* Map pin */}
            <div className="about-map-pin about-map-pin-1">
              <svg width="18" height="24" viewBox="0 0 18 24">
                <path d="M9 0C4 0 0 4 0 9c0 7 9 15 9 15s9-8 9-15c0-5-4-9-9-9z" fill="#FF6B8A"/>
                <circle cx="9" cy="9" r="3.5" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Doodle map path 1->2 */}
          <svg className="about-map-path" width="100" height="60" viewBox="0 0 100 60">
            <path d="M20 2 Q5 20 30 30 Q55 40 40 55" stroke="#FF6B8A" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 4" opacity="0.45"/>
            {/* tiny footsteps */}
            <circle cx="14" cy="12" r="1.5" fill="#FF6B8A" opacity="0.3"/>
            <circle cx="28" cy="24" r="1.5" fill="#FF6B8A" opacity="0.3"/>
            <circle cx="38" cy="38" r="1.5" fill="#FF6B8A" opacity="0.3"/>
            {/* tiny arrow */}
            <path d="M37 50 L40 57 L43 51" stroke="#FF6B8A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4"/>
          </svg>

          {/* Photo 2 - Cafe */}
          <div className="about-polaroid about-pol-2">
            <div className="about-pol-tape" style={{ background: 'linear-gradient(135deg, #74C0FC, #A5D8FF)', right: '18px', left: 'auto', transform: 'rotate(3deg)' }} />
            <div className="about-pol-img">
              <img src="/photo2.jpg?v=3" alt="Aeva at cafe" />
            </div>
            <div className="about-pol-caption">cafe hopping as usual</div>
            <div className="about-map-pin about-map-pin-2">
              <svg width="18" height="24" viewBox="0 0 18 24">
                <path d="M9 0C4 0 0 4 0 9c0 7 9 15 9 15s9-8 9-15c0-5-4-9-9-9z" fill="#74C0FC"/>
                <circle cx="9" cy="9" r="3.5" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Doodle map path 2->3 */}
          <svg className="about-map-path about-map-path-2" width="100" height="60" viewBox="0 0 100 60">
            <path d="M60 2 Q80 15 55 28 Q30 40 50 55" stroke="#C3AED6" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 4" opacity="0.45"/>
            <circle cx="66" cy="10" r="1.5" fill="#C3AED6" opacity="0.3"/>
            <circle cx="58" cy="22" r="1.5" fill="#C3AED6" opacity="0.3"/>
            <circle cx="42" cy="36" r="1.5" fill="#C3AED6" opacity="0.3"/>
            <path d="M47 50 L50 57 L53 51" stroke="#C3AED6" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4"/>
          </svg>

          {/* Photo 3 - Looking back */}
          {/* <div className="about-polaroid about-pol-3">
            <div className="about-pol-tape" style={{ background: 'linear-gradient(135deg, #C3AED6, #DDD0EC)', left: '15px', transform: 'rotate(-2deg)' }} />
            <div className="about-pol-img">
              <img src="/photo1.jpg?v=2" alt="Aeva looking back" />
            </div>
            <div className="about-pol-caption">somewhere in Pulchowk Campus</div>
            <div className="about-map-pin about-map-pin-3">
              <svg width="18" height="24" viewBox="0 0 18 24">
                <path d="M9 0C4 0 0 4 0 9c0 7 9 15 9 15s9-8 9-15c0-5-4-9-9-9z" fill="#C3AED6"/>
                <circle cx="9" cy="9" r="3.5" fill="white"/>
              </svg>
            </div>
          </div> */}

    
        </div>

        {/* Text card on the right */}
        <div className="about-text-card">
          <div className="washi-tape" />
          <p>
            I'm <strong>Aeva Acharya</strong>, a fourth-year Electronics, Communication & Information Engineering student at Pulchowk Campus, IOE. I'm someone who loves trying new things, learning random skills, and saying yes to opportunities even when they scare me a little. I strongly believe in "If not me, who? If not now, when?" and that mindset somehow keeps pulling me into hackathons, projects, events, and all kinds of fun chaos.
          </p>
          <br />
          <p>
           I really enjoy building things that mix technology with creativity and actually help people in day-to-day life. Whether it's mentoring students in STEM, working on crazy ideas with my team, or just exploring something completely new, I love being around people who are passionate and driven.
          </p>
          <br />
          <p>
          Outside of tech, I'm basically an escapist with way too many hobbies, I love dancing (at any time and any place) , playing basketball, crocheting cute things, and reading suspense novels. I find comfort in travelling to new places and going on long treks, there's something about mountains, unfamiliar roads, and new experiences that eases my heart. I dream of seeing as much of the world as I can, collecting stories, memories, and little pieces of every place along the way.
          I'm probably too optimistic for my own good, but honestly, I think that's what makes life exciting ✨
          </p>
          <p className="handwritten-note">~ always learning, always creating ~</p>
        </div>
      </div>
    </section>
  )
}
