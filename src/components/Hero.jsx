import React from "react";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-photo-frame">
          <div className="tape" />
          <div className="hero-photo-placeholder">
            <img
              src={`${import.meta.env.BASE_URL}hero.jpg?v=4`}
              alt="Aeva Acharya"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
          <div className="hero-photo-caption">^ yes, that's actually me</div>
        </div>

        <div className="hero-text">
          <span className="hero-greeting">Hola ! I'm</span>
          <h1 className="hero-name">
            <span className="highlight">Aeva</span> Acharya
          </h1>
          <p className="hero-tagline">
            engineering student by day, <br />
            chaos coordinator by every other hour
          </p>
          <p className="hero-subtitle">
            Currently in my fourth year at Pulchowk Campus, figuring out the
            intersection of electronics, code, and "why does this not work?"
            moments. Big on data science, hackathons, and accidentally
            volunteering for too many things.
          </p>
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn-scrapbook primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="btn-scrapbook"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Say Hello
            </a>
          </div>
          <div className="hero-stamp">
            Pulchowk Campus
            <br />
            IOE
            <br />
            From 2022
          </div>
        </div>
      </div>

      <svg
        className="hero-doodle-arrow"
        width="80"
        height="60"
        viewBox="0 0 80 60"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.15,
        }}
      >
        <path
          d="M10 10 Q40 5 50 30 Q55 45 40 50"
          stroke="#3c2f2f"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M35 42 L40 52 L48 45"
          stroke="#3c2f2f"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
