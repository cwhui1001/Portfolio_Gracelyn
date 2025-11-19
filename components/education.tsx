"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Malaya',
    location: 'Kuala Lumpur, Malaysia',
    period: '2020 - 2024',
    gpa: '3.75',
    achievements: [
      'Dean\'s List for 3 consecutive semesters',
      'Best Final Year Project Award',
      'Active member of Computer Science Society',
      'Completed with Honors'
    ],
    courses: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Management Systems',
      'Web Development',
      'Mobile Application Development',
      'Machine Learning'
    ]
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'Polytechnic Sultan Salahuddin Abdul Aziz Shah',
    location: 'Selangor, Malaysia',
    period: '2018 - 2020',
    gpa: '3.85',
    achievements: [
      'Graduated with Distinction',
      'Outstanding Student Award',
      'President of IT Club',
      'Organized multiple tech workshops'
    ],
    courses: [
      'Programming Fundamentals',
      'Object-Oriented Programming',
      'Network Administration',
      'System Analysis & Design',
      'Digital Media Technology'
    ]
  }
]

const certifications = [
  {
    name: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    icon: '☁️'
  },
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    icon: '⚛️'
  },
  {
    name: 'Google Analytics Certified',
    issuer: 'Google',
    date: '2022',
    icon: '📊'
  },
  {
    name: 'Scrum Master Certification',
    issuer: 'Scrum Alliance',
    date: '2022',
    icon: '🏃‍♂️'
  }
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            My academic journey and continuous learning through professional certifications 
            have built a strong foundation in computer science and modern technologies.
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Academic Background
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {edu.institution}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>GPA: {edu.gpa}/4.0</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Courses:</h5>
                    <div className="space-y-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <Award className="w-8 h-8 text-purple-600" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}