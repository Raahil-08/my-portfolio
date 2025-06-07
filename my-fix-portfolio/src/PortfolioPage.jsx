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
    title: 'Project 2',
    description: 'This is a short description of project 2.',
  },
  {
    title: 'Project 3',
    description: 'This is a short description of project 3.',
  },
]

function ProjectTile({ title, description }) {
  return (
    <div className="project-sticky-tile">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <div className="portfolio-wrapper">
      <section className="hero-section">
        <h1 className="hero-heading">Hi, I'm a College Student in Ahmedabad</h1>
        <p className="hero-subtext">
          I create engaging digital experiences through clean code and bold design.
        </p>
      </section>

      <section className="contribution-section">
        <h2 className="section-title">My Contributions</h2>
        <p className="section-description">
          I've participated in national hackathons, contributed to open-source projects, and developed tools that solve real-world problems.
        </p>
      </section>

      <section className="latest-work-section">
        <div className="latest-work-heading-sticky">
          <h2 className="section-title">Latest Work</h2>
        </div>
        <div className="sticky-scroll-stack">
          {projects.map((project, index) => (
            <ProjectTile key={index} title={project.title} description={project.description} />
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
