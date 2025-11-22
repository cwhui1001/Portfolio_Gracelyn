"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GraduationCap, Calendar, MapPin, Award, X, Eye } from 'lucide-react'
import Image from 'next/image'

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Sunway University',
    location: 'Kuala Lumpur, Malaysia',
    period: '2025 - 2027',
    gpa: '3.90',
    achievements: [
      'Dean\'s List for 3 consecutive semesters',
      'Full Scholarship Recipient',
      'Best Final Year Project Award',
      'Active member of Sunway Tech Club, Sunway Robotic Club, Sunway Yoga Club',
      'Volunteered in university open day events',
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
    institution: 'Sunway College Kuala Lumpur',
    location: 'Selangor, Malaysia',
    period: '2023 - 2025',
    gpa: '3.98',
    achievements: [
      'Graduated with Distinction',
      'Outstanding Student Award',
      'Member of Sunway Tech Club, Sunway Yoga Club',
      'Actively participated in multiple tech workshops', 
      'Volunteered in open day events'
    ],
    courses: [
      'Programming Fundamentals',
      'Object-Oriented Programming',
      'Network Administration',
      'System Analysis & Design'
    ]
  },
  {
    degree: 'Malaysian Certificate of Education (SPM)',
    institution: 'SMK USJ 12',
    location: 'Subang Jaya, Selangor, Malaysia',
    period: '2018 - 2022',
    results: '10As (2A+,3A,5A-)',
    achievements: [
      'Excellent academic performance with 10As',
      'Active member of Wushu Club',
      'Participated in Badminton Club',
      'Member of Mathematics Club'
    ],
    courses: [
      'Mathematics',
      'Additional Mathematics',
      'Physics',
      'Chemistry',
      'Accounting',
      'Computer Science'
    ]
  }
]

const certifications = [
  {
    name: 'Microsoft Learn Challenge | Ignite Edition: Build trustworthy AI solutions on Microsoft Azure',
    issuer: 'Microsoft',
    date: 'Jan 2025',
    icon: '🤖',
    credentialUrl: 'https://learn.microsoft.com/en-gb/users/gracelyn-1001/achievements/dc7c2b6j?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    skills: ['Artificial Intelligence (AI)'],
    image: '/certificates/microsoftAI.png' // Add your certificate image path
  },
  {
    name: 'Umpsa x Huawei AppGallery Mobile App Competition',
    issuer: 'Universiti Malaysia Pahang Al-Sultan Abdullah',
    date: 'Nov 2024',
    icon: '📱',
    credentialUrl: 'https://drive.google.com/file/d/1CCp4rWP30qmsW1CFWEcjtC5x3AB0YvSZ/view',
    skills: ['User Experience (UX)', 'User Interface Design', 'Mobile Applications'],
    image: '/certificates/TimelessTribute.png' // Add your certificate image path
  },
  {
    name: 'DELF A2',
    issuer: 'France Education International',
    date: 'Jan 2023',
    icon: '🇫🇷',
    credentialUrl: '#',
    skills: ['French'],
    image: '/certificates/DelfA2.png' // Add your certificate image path
  },
  {
    name: 'Jeffrey Cheah Foundation Scholarship',
    issuer: 'Sunway Education',
    date: 'Jul 2025',
    icon: '🏆',
    credentialUrl: '#',
    skills: ['Full Scholarship', 'Academic Excellence'],
    image: '/certificates/JCF.jpeg' // Add your certificate image path
  }
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

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
                        <span>
                          {edu.results ? edu.results : `GPA: ${edu.gpa}/4.0`}
                        </span>
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
            Professional Certifications & Awards
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                      {cert.date}
                    </p>
                    
              
                    
                    {cert.skills && (
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.credentialUrl && cert.credentialUrl !== '#' && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                        >
                          <Award className="w-3 h-3" />
                          Show Credential
                        </a>
                      )}
                      
                      {cert.image && (
                        <button
                          onClick={() => setSelectedCertificate(cert)}
                          className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium transition-colors duration-300"
                        >
                          <Eye className="w-3 h-3" />
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Image Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {selectedCertificate.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 max-h-[calc(90vh-80px)] overflow-auto">
              <div className="relative w-full h-auto">
                <Image
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.name} Certificate`}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              {/* Certificate Details */}
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Issuer</p>
                    <p className="text-gray-600 dark:text-gray-300">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Date</p>
                    <p className="text-gray-600 dark:text-gray-300">{selectedCertificate.date}</p>
                  </div>
                  {selectedCertificate.credentialId && (
                    <div className="md:col-span-2">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Credential ID</p>
                      <p className="text-gray-600 dark:text-gray-300">{selectedCertificate.credentialId}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}