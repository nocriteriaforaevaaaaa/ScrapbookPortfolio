import React from "react";

const experiences = [
  {
    org: "Locus 2027, IOE Pulchowk Campus",
    role: "Software Coordinator",
    date: "June 2026 - Present",
    location: "Pulchowk Campus, Nepal",
    desc: [
      "Leading the planning and execution of software-focused initiatives, including fellowships, hackathons, workshops, coding competitions, and outreach programs",
      "Overseeing technical teams and volunteers while coordinating instructors, mentors, participants, and event logistics for software-related activities",
      "Managing the LOCUS Open Source Team, technical appointments, community engagement, and collaborations to foster learning and open-source contributions",
      "Driving software community growth through mentorship programs, developer events, and initiatives that promote programming, innovation, and technical skill development",
    ],
    note: "still going!",
  },
  {
    org: "IEEE Pulchowk Student Branch",
    role: "Senior Executive Member",
    date: "Jan 2026 - Present",
    location: "Lalitpur, Nepal",
    desc: [
      "Organizing technical and professional development events for branch members",
      "Supporting event logistics, coordination, and member outreach activities",
    ],
    note: "still going!",
  },
  {
    org: "WIE - IEEE Pulchowk Affinity Group",
    role: "Senior Executive Member",
    date: "Jan 2026 - Present",
    location: "Lalitpur, Nepal",
    desc: [
      "Planning and executing Women in STEM workshops and seminars",
      "Collaborating across clubs to boost student membership in STEM",
    ],
  },
  {
    org: "IEEE Computer Society Chapter",
    role: "Senior Executive Member",
    date: "Jan 2026 - Present",
    location: "Lalitpur, Nepal",
    desc: [
      "Planning and executing computing-focused workshops and seminars",
      "Increasing student participation and chapter visibility",
    ],
  },
  {
    org: "IEEE Pulchowk Student Branch",
    role: "Secretary",
    date: "Jan 2025 - Jan 2026",
    location: "Lalitpur, Nepal",
    desc: [
      "Coordinated branch activities and managed official documentation",
      "Organized workshops with 100+ participants, boosting engagement by 30%",
    ],
    note: "this one taught me so much",
  },
  {
    org: "Hult Prize at IOE, Pulchowk Campus",
    role: "Chief Content Writer",
    date: "Jan 2025 - Dec 2025",
    location: "Lalitpur, Nepal",
    desc: [
      "Produced engaging promotional and educational content for social media",
      "Increased campaign reach by 40%",
    ],
  },
  {
    org: "IEEE Pulchowk Student Branch",
    role: "Social Media & Content Lead",
    date: "Jan 2024 - Dec 2024",
    location: "Lalitpur, Nepal",
    desc: [
      "Led content strategy, achieving 25% growth in online community engagement",
    ],
    note: "where it all started",
  },
  {
    org: "Women in Engineering (WIE Pulchowk)",
    role: "Treasurer",
    date: "Jul 2024 - Jan 2026",
    location: "Lalitpur, Nepal",
    desc: [
      "Managed budget planning and resource allocation for technical and outreach programs",
    ],
  },
  {
    org: "Private Mathematics Tutor",
    role: "Remote Tutor (Nepal & U.S.)",
    date: "Jan 2025 - Jun 2025",
    location: "Remote",
    desc: [
      "Tutored a CS student in Mathematics for 6 months, strengthening analytical skills",
    ],
  },
  {
    org: "STEM Mentor, Try-Engineering Workshop",
    role: "Workshop Facilitator",
    date: "2025",
    location: "Pulchowk Campus, Nepal",
    desc: [
      "Led hands-on workshops for 9th-10th grade students from 10 schools on transistor-based nightlight projects",
    ],
    note: "the kids were so excited!",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header scroll-reveal">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          how I spent most of my college years (spoiler: exploring everything)
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-card scroll-reveal" key={i}>
            <div className="pin" />
            <span className="exp-date">{exp.date}</span>
            <h3 className="exp-org">{exp.org}</h3>
            <p className="exp-role">{exp.role}</p>
            <p className="exp-location">{exp.location}</p>
            <ul className="exp-desc">
              {exp.desc.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
            {exp.note && <span className="exp-margin-note">{exp.note}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
