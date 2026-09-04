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
              <div className="glass-card p-4 rounded-3xl text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-4 rounded-3xl text-center">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card p-4 rounded-3xl text-center">
                <div className="text-3xl font-bold text-accent-foreground">20+</div>
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
                Hi! I'm a software developer who enjoys building modern, user-friendly web applications. I started 
                learning programming out of curiosity, and over time it became something I genuinely enjoy. 
                I like turning ideas into real products that people can use and appreciate.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm interested in full-stack development, so I enjoy working on both the frontend and
                backend. Lately, I've also been exploring artificial intelligence and machine learning,
                and I'm excited about how AI can be used to create smarter, more meaningful user
                experiences. I'm always looking for opportunities to learn, improve, and build something
                that makes a difference.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm probably on a badminton court (Yesss I'm a badminton kaki and always up
                for a game! 🏸). Besides that, I enjoy exploring new technologies, building personal
                projects, and staying up to date with the latest trends in software development and AI.
                I believe there's always something new to learn, and that's what keeps me excited about
                tech.
              </p>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}