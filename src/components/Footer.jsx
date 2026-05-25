import React from 'react'

export default function Footer() {
  return (
    <footer className="scrapbook-footer">
      <div className="footer-avatar-wrapper">
        <img src="/avatar.jpg" alt="Aeva avatar" className="footer-avatar" />
      </div>
      <p>
        Handcrafted with <span className="footer-heart">{'\u{2764}\u{FE0F}'}</span> by Aeva Acharya &bull; {new Date().getFullYear()}
      </p>
      <p style={{ fontSize: '0.95rem', marginTop: '4px', opacity: 0.6 }}>
        you made it to the bottom! thanks for scrolling this far :)
      </p>
    </footer>
  )
}
