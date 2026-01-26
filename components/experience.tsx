"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Fast Track SDI Sdn Bhd',
    location: 'Puchong, Selangor, Malaysia',
    period: 'Apr 2025 - Aug 2025 · 5 mos',
    type: 'Internship',
    responsibilities: [
      'Developed and maintained software applications using modern development practices',
      'Gained hands-on experience with enterprise software development',
      'Collaborated with senior developers on various projects',
      'Applied academic knowledge to real-world software development scenarios'
    ],
    technologies: ['FinTech', 'SAP ERP', 'Software Development', 'SAP Products', 'SAP Implementation', 'SAP BusinessObjects', 'SQL', 'C#']
  },
  {
    title: 'IT Support Associate',
    company: 'Sunway Education',
    location: 'Subang Jaya, Selangor, Malaysia',
    period: 'Jan 2025 - Apr 2025 · 4 mos',
    type: 'Part-time',
    responsibilities: [
      'Provided technical support to students and faculty members',
      'Troubleshooted hardware and software issues across campus systems',
      'Assisted with IT infrastructure maintenance and updates',
      'Documented technical issues and solutions for knowledge base'
    ],
    technologies: ['Information Technology', 'Technical Support', 'Hardware Troubleshooting']
  },
  {
    title: 'Admissions Ambassador',
    company: 'Sunway Admissions Ambassador',
    location: 'Subang Jaya, Selangor, Malaysia',
    period: 'Jan 2024 - Aug 2025 · 1 yr 8 mos',
    type: 'Part-time',
    responsibilities: [
      'Assisted prospective students with admission inquiries and application processes',
      'Provided guidance on course selection and university programs',
      'Represented the university at education fairs and recruitment events',
      'Maintained excellent customer service standards while handling student queries'
    ],
    technologies: ['Customer Service', 'Communication', 'Student Relations']
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            My journey through various roles has shaped me into a well-rounded developer with 
            experience across different technologies and team environments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass-card rounded-3xl p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-lg font-semibold text-muted-foreground">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}