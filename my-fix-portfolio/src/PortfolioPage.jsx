import React, { useEffect, useRef, useState } from "react";
import "./PortfolioPage.css";

const projects = [
  {
    title: "Project 1",
    link: "https://github.com/your/project1",
    image: "/images/project1.png",
  },
  {
    title: "Project 2",
    link: "https://github.com/your/project2",
    image: "/images/project2.png",
  },
  {
    title: "Project 3",
    link: "https://github.com/your/project3",
    image: "/images/project3.png",
  },
];

function useOnScreen(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

export default function PortfolioPage() {
  const heroRef = useRef(null);
  const contribRef = useRef(null);
  const latestRef = useRef(null);
  const contactRef = useRef(null);

  const showHero = useOnScreen(heroRef);
  const showContrib = useOnScreen(contribRef);
  const showLatest = useOnScreen(latestRef);
  const showContact = useOnScreen(contactRef);

  return (
    <div className="portfolio-wrapper">
      <div
        className={`section-container ${showHero ? "active" : ""}`}
        ref={heroRef}
      >
        <div className="section-highlight" />
        <section className="hero-section">
          <p className="hero-subtext">
            <h1 className="hero-heading">
              Hi, I'm a College Student in Ahmedabad
            </h1>
            I create engaging digital experiences through clean code and bold
            design. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Neque, nemo recusandae cum eum atque harum ex enim aliquam culpa
            pariatur iste molestias excepturi! Possimus, minima nisi iusto eos
            voluptatem voluptate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fuga id quisquam placeat obcaecati dolores
            quibusdam nostrum quo. Explicabo nobis cumque eligendi, doloribus
            velit neque fuga modi, aspernatur numquam eius totam!
          </p>
        </section>
      </div>

      <div
        className={`section-container ${showContrib ? "active" : ""}`}
        ref={contribRef}
      >
        <div className="section-highlight" />
        <section className="contribution-section">
          <p className="section-description">
            <h2 className="section-title">My Contributions</h2>
            I've participated in national hackathons, contributed to open-source
            projects, and developed tools that solve real-world problems. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            delectus magni ipsam incidunt nostrum nihil dolorem, fugiat
            veritatis hic doloremque, nobis eligendi sit? Voluptatum dolore
            porro inventore labore quasi commodi? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis animi recusandae quia voluptates
            a asperiores, debitis tempora adipisci voluptatem ullam voluptas
            accusantium, iusto eligendi aspernatur nam labore, exercitationem
            dolorum sunt!
          </p>
        </section>
      </div>

      <div
        className={`section-container ${showLatest ? "active" : ""}`}
        ref={latestRef}
      >
        <div className="section-highlight" />
        <section className="latest-work-section">
          <div className="stacked-scroll-wrapper">
            <div className="latest-work-heading-sticky">
              <h2 className="section-title">Latest Work</h2>
            </div>

            {projects.map((project, index) => (
              <div className="scroll-frame" key={index}>
                <div className="project-sticky-tile">
                  <div className="tile-header">
                    <h3 className="project-title">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      View Code →
                    </a>
                  </div>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              </div>
            ))}
            <div className="scroll-spacer"></div>
          </div>
        </section>
      </div>

      <div
        className={`section-container ${showContact ? "active" : ""}`}
        ref={contactRef}
      >
        {/* <div className="section-highlight" /> */}
        <section className="contact-section">
          <p className="section-description">
            <h2 className="section-title"></h2>
            <p className="contact-info"></p>
            <p className="contact-info"></p>
          </p>
        </section>
      </div>
      <div
        className={`section-container ${showContact ? "active" : ""}`}
        ref={contactRef}
      >
        <div className="section-highlight" />
        <section className="contact-section">
          <p className="section-description">
            <h2 className="section-title">Contact Me</h2>
            <p className="contact-info">Email: your.email@example.com</p>
            <p className="contact-info">LinkedIn: linkedin.com/in/yourname</p>
          </p>
        </section>
      </div>
    </div>
  );
}
