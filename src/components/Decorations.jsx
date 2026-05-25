import React from 'react'

export default function Decorations() {
  return (
    <>
      {/* Floating flower doodles */}
      <div className="deco-flower deco-flower-1">{'\u{1F33C}'}</div>
      <div className="deco-flower deco-flower-2">{'\u{1F338}'}</div>
      <div className="deco-flower deco-flower-3">{'\u{1F33A}'}</div>
      <div className="deco-flower deco-flower-4">{'\u{1F33B}'}</div>
      <div className="deco-flower deco-flower-5">{'\u{1F337}'}</div>

      {/* Floating stars */}
      <div className="deco-star deco-star-1">{'\u{2B50}'}</div>
      <div className="deco-star deco-star-2">{'\u{2728}'}</div>
      <div className="deco-star deco-star-3">{'\u{2B50}'}</div>
      <div className="deco-star deco-star-4">{'\u{2728}'}</div>

      {/* Corner doodle SVGs */}
      <svg width="150" height="150" viewBox="0 0 150 150" style={{position:'fixed',top:0,left:0,opacity:0.04,pointerEvents:'none',zIndex:0}}>
        <circle cx="0" cy="0" r="120" stroke="#e8a0bf" strokeWidth="1" fill="none" strokeDasharray="4 6"/>
        <circle cx="0" cy="0" r="100" stroke="#a8c5a0" strokeWidth="1" fill="none" strokeDasharray="3 8"/>
        <circle cx="0" cy="0" r="80" stroke="#c3aed6" strokeWidth="1" fill="none" strokeDasharray="5 5"/>
      </svg>

      <svg width="150" height="150" viewBox="0 0 150 150" style={{position:'fixed',bottom:0,right:0,opacity:0.04,pointerEvents:'none',zIndex:0}}>
        <circle cx="150" cy="150" r="120" stroke="#e8a0bf" strokeWidth="1" fill="none" strokeDasharray="4 6"/>
        <circle cx="150" cy="150" r="100" stroke="#a8d8ea" strokeWidth="1" fill="none" strokeDasharray="3 8"/>
        <circle cx="150" cy="150" r="80" stroke="#f5c7a9" strokeWidth="1" fill="none" strokeDasharray="5 5"/>
      </svg>
    </>
  )
}
