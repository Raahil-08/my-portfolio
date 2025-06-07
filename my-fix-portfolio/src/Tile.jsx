import React from 'react'
import { motion, useTransform } from 'framer-motion'

export default function AnimatedTile({ index, total, project, scrollYProgress }) {
  const start = index / total
  const end = (index + 1) / total

  const y = useTransform(scrollYProgress, [start, end], ['0%', '-100%'])
  const opacity = useTransform(scrollYProgress, [start, start + 0.1], [1, 0])

  return (
    <motion.div
      className="stacked-tile"
      style={{ y, opacity, zIndex: total - index }}
    >
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </motion.div>
  )
}
