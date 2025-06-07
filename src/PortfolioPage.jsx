import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const sections = [
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
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ['100vh', '-100vh']), { stiffness: 100, damping: 20 })

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans">
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm a College Student in Ahmedabad</h1>
        <p className="text-lg max-w-xl mx-auto">
          I'm building projects and a portfolio that creates lasting impressions.
        </p>
      </section>

      <section className="p-10 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-4">My Contributions</h2>
        <p className="max-w-xl mx-auto">
          Participated in hackathons, contributed to open source, and developed apps that solve real problems.
        </p>
      </section>

      <section ref={containerRef} className="relative overflow-hidden h-[100vh] bg-gray-900">
        <div className="sticky top-0 h-[100vh] flex items-center justify-center">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              style={{ y }}
              className="absolute w-2/3 p-10 rounded-xl shadow-lg bg-gray-700 text-center"
            >
              <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
              <p>{section.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-10 text-center bg-gray-800">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourname</p>
      </section>
    </div>
  )
}
