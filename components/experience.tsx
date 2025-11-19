"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
  {
    title: 'Software Developer',
    company: 'Tech Innovations Ltd.',
    location: 'Kuala Lumpur, Malaysia',
    period: '2023 - Present',
    responsibilities: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive designs and optimized application performance',
      'Participated in code reviews and contributed to best practices documentation'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB']
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Digital Solutions Co.',
    location: 'Selangor, Malaysia',
    period: '2022 - 2023',
    responsibilities: [
      'Built responsive user interfaces using modern frontend frameworks',
      'Worked closely with UI/UX designers to implement pixel-perfect designs',
      'Optimized web applications for performance and accessibility',
      'Assisted in migrating legacy applications to modern tech stack'
    ],
    technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'HTML5']
  },
  {
    title: 'Web Development Intern',
    company: 'StartupHub Malaysia',
    location: 'Cyberjaya, Malaysia',
    period: '2022 (3 months)',
    responsibilities: [
      'Supported the development team in building web applications',
      'Learned modern development practices and version control with Git',
      'Contributed to bug fixes and small feature implementations',
      'Gained hands-on experience with full-stack development'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            My journey through various roles has shaped me into a well-rounded developer with 
            experience across different technologies and team environments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2" />

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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
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