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
      'Active member of Sunway Tech Club, Sunway Robotic Club, Sunway Yoga Club',
      'Volunteered in university open day events'
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
                className="glass-card rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group flex flex-col cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              >
                {/* Certificate Image */}
                 {cert.image && (
                  <div className="relative w-full h-48 bg-muted/30 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full text-primary shadow-lg">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
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
                      
                      <div className="flex flex-wrap gap-3 pt-2 border-t border-border/50 mt-auto">
                        {cert.credentialUrl && cert.credentialUrl !== '#' && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium transition-colors hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Award className="w-3 h-3" />
                            Show Credential
                          </a>
                        )}
                      </div>
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
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedCertificate(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl max-w-[95vw] max-h-[95vh] w-auto h-auto overflow-hidden"
          >
            {/* Modal Header - constrained width matches image */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0a0a0a] z-10 shrink-0">
              <div className="mr-8">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {selectedCertificate.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1 font-medium">
                  {selectedCertificate.issuer} <span className="mx-1 text-gray-600">•</span> {selectedCertificate.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200 shrink-0 group"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </button>
            </div>
            
            {/* Certificate Image Area - Shrink wrapped */}
            <div className="relative overflow-auto flex items-center justify-center p-0 bg-black">
               {/* Using standard img tag to allow natural shrink-wrapping of the container */}
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                 src={selectedCertificate.image}
                 alt={`${selectedCertificate.name} Certificate`}
                 className="max-h-[calc(90vh-100px)] w-auto object-contain block"
               />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}