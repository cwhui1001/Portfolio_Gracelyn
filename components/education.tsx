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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education & Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            My academic journey and continuous learning through professional certifications 
            have built a strong foundation in computer science and modern technologies.
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3 relative inline-block"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            Academic Background
          </motion.h3>

          <motion.div 
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card rounded-xl p-8 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-lg font-semibold text-foreground/80">
                        {edu.institution}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-muted-foreground">
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
                      <h5 className="font-semibold text-foreground mb-3">Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Key Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            Professional Certifications & Awards
          </motion.h3>

          <motion.div 
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card rounded-xl p-6 hover:translate-y-[-4px] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0 bg-background/50 p-2 rounded-lg">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-primary font-medium text-sm mb-3">
                      {cert.date}
                    </p>
                    
                    {cert.skills && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs border border-secondary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-border/50">
                      {cert.credentialUrl && cert.credentialUrl !== '#' && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                        >
                          <Award className="w-3 h-3" />
                          Show Credential
                        </a>
                      )}
                      
                      {cert.image && (
                        <button
                          onClick={() => setSelectedCertificate(cert)}
                          className="inline-flex items-center gap-1 text-secondary hover:text-secondary/80 text-sm font-medium transition-colors"
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
          </motion.div>
        </div>
      </div>

      {/* Certificate Image Modal uses native glassmorphism too */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedCertificate(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-xl border-primary/20 shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-border/50">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {selectedCertificate.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 max-h-[calc(90vh-80px)] overflow-auto bg-background/50">
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
              <div className="mt-4 p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Issuer</p>
                    <p className="text-muted-foreground">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Date</p>
                    <p className="text-muted-foreground">{selectedCertificate.date}</p>
                  </div>
                  {selectedCertificate.credentialId && (
                    <div className="md:col-span-2">
                      <p className="font-semibold text-foreground mb-1">Credential ID</p>
                      <p className="text-muted-foreground">{selectedCertificate.credentialId}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}