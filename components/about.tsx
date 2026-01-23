"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-rows-3 gap-8 pt-8"
            >
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate software developer with a strong foundation in modern web technologies 
                and a keen interest in creating innovative digital solutions. My journey in technology 
                began with a curiosity about how things work, which has evolved into a dedicated pursuit 
                of building exceptional user experiences.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With experience in full-stack development, I enjoy working across the entire technology 
                stack - from crafting intuitive user interfaces to building robust backend systems. 
                I'm particularly drawn to projects that challenge me to learn new technologies and 
                solve complex problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring the latest tech trends, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe in 
                continuous learning and am always excited about the next opportunity to grow and make 
                an impact through technology.
              </p>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}