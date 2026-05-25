import React from 'react'

const skillCategories = [
  {
    title: 'Programming',
    items: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'React.js', 'Next.js', 'Django'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Three.js', 'Figma'],
  },
  {
    title: 'Soft Skills',
    items: ['Content Writing', 'Event Coordination', 'Public Speaking'],
  },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header scroll-reveal">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">things I can actually do (and some I'm still figuring out)</p>
      </div>

      <div className="skills-container">
        {skillCategories.map((cat, i) => (
          <div className="skill-envelope scroll-reveal" key={i}>
            <h3 className="skill-category">{cat.title}</h3>
            <ul className="skill-list">
              {cat.items.map((item, j) => (
                <li className="skill-item" key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
