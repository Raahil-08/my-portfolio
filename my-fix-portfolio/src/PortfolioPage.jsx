import React from 'react'
import './PortfolioPage.css'

const projects = [
  {
    title: 'Project 1',
    description: 'This is a short description of project 1.',
  },
  {
    title: 'Project 2',
    description: 'This is a short description of project 2.',
  },
  {
    title: 'Project 3',
    description: 'This is a short description of project 3.',
  },
]

export default function PortfolioPage() {
  return (
    <div className="portfolio-wrapper">
      <section className="hero-section">
        <h1 className="hero-heading">Hi, I'm a College Student in Ahmedabad</h1>
        <p className="hero-subtext">
          I'm building projects and a portfolio that creates lasting impressions.
        </p>
      </section>

      <section className="contribution-section">
        <h2 className="section-title">My Contributions</h2>
        <p className="section-description">
          Participated in hackathons, contributed to open source, and developed apps that solve real problems.
        </p>
      </section>

      <section className="latest-work-section">
        <div className="latest-work-heading-sticky">
          <h2 className="section-title">Latest Work</h2>
        </div>
        <div className="stacked-scroll-wrapper">
          {projects.map((project, index) => (
            <div className="scroll-frame" key={index}>
              <div className="project-sticky-tile">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-info">Email: your.email@example.com</p>
        <p className="contact-info">LinkedIn: linkedin.com/in/yourname</p>
      </section>
    </div>
  )
}
