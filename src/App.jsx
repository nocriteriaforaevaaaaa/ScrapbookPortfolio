import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import SparkleCounter from "./components/SparkleCounter";
import Footer from "./components/Footer";
import Decorations from "./components/Decorations";
import RetroDecorations from "./components/RetroDecorations";
import "./App.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scrapbook-page">
      <Decorations />
      <RetroDecorations />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Education />
      <Interests />
      <Contact />
      <SparkleCounter />
      <Footer />
    </div>
  );
}

export default App;
