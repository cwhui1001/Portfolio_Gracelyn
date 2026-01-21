"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Smartphone, Cloud, Settings } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Globe className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 65 }
    ]
  },
  {
    title: 'Database & Cloud',
    icon: <Cloud className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Git', level: 95 }
    ]
  },
  {
    title: 'Mobile & Tools',
    icon: <Smartphone className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Flutter', level: 65 },
      { name: 'Figma', level: 85 },
      { name: 'Jest', level: 80 },
      { name: 'Webpack', level: 75 },
      { name: 'Vite', level: 85 }
    ]
  }
]

const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Project Management',
  'Communication',
  'Critical Thinking',
  'Adaptability',
  'Leadership',
  'Time Management'
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across 
            various technologies and frameworks.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-card rounded-xl p-8 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${category.color} relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card rounded-xl p-8 shadow-2xl border-t border-white/10"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white shadow-lg">
                <Settings className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Soft Skills
              </h3>
            </div>
            <p className="text-muted-foreground">
              Essential interpersonal and professional skills that complement my technical expertise
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="group cursor-default"
              >
                <div className="bg-background/50 border border-border/50 rounded-lg p-4 text-center hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary/30 transition-all duration-300">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '25+', label: 'Technologies Mastered', color: 'text-blue-500' },
              { number: '3+', label: 'Years of Experience', color: 'text-purple-500' },
              { number: '100%', label: 'Commitment to Learning', color: 'text-green-500' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-6 hover:bg-primary/5 transition-all duration-300"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}