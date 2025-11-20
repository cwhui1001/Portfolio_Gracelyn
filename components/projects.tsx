"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react'

const projects = [
  {
    title: 'SAP Invoice Management Portal',
    description: 'A comprehensive invoice management system built with SAP ERP integration. Features full-stack development with modern React frontend and robust Node.js backend, utilizing Supabase for data management.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'Supabase', 'C#', 'Blazor', 'FinTech', 'SAP ERP'],
    features: [
      'SAP ERP integration',
      'Real-time invoice processing',
      'Full-stack development',
      'Modern responsive design'
    ],
    category: 'Full Stack',
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-blue-500 to-purple-600',
    github: 'https://github.com/cwhui1001/SAPInvoiceOCR', // Private/Enterprise project
    demo: '#' // Private/Enterprise project
  },
  {
    title: 'SAP Support Chatbot',
    description: 'An intelligent AI-powered chatbot designed to provide automated support for SAP-related queries. Built with artificial intelligence capabilities to enhance user experience and reduce support response time.',
    technologies: ['C#', 'Artificial Intelligence (AI)', 'Chatbot Development'],
    features: [
      'AI-powered responses',
      'SAP system integration',
      'Automated support queries',
      'Real-time assistance'
    ],
    category: 'AI',
    icon: <Code className="w-6 h-6" />,
    gradient: 'from-green-500 to-teal-600',
    github: 'https://github.com/cwhui1001/SAPChatbot3-', // Private/Enterprise project
    demo: '#' // Private/Enterprise project
  },
  {
    title: 'BrighterUs',
    description: 'A comprehensive tertiary education platform that consolidates university information with innovative features. Supports students in pursuing education efficiently while reducing search time across multiple platforms.',
    technologies: ['Laravel', 'PHP', 'HTML', 'CSS', 'Web Development', 'Full-Stack Development', 'UI Design', 'UX'],
    features: [
      'University information consolidation',
      'Student support features',
      'Efficient course searching',
      'Multi-platform integration'
    ],
    category: 'Web App',
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600',
    github: 'https://github.com/cwhui1001/BrighterUs', // Academic project
    demo: '#' // Academic project
  },
  {
    title: 'Timeless Tribute',
    description: 'A mobile application designed to help users honor and maintain graves of loved ones remotely. Addresses challenges of distance and busy schedules by enabling remote tribute services and cultural practice preservation.',
    technologies: ['Mobile Design', 'Mobile Applications', 'UI Design', 'UX'],
    features: [
      'Remote grave maintenance',
      'Cultural practice preservation',
      'User-friendly interface',
      'Memorial service management'
    ],
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    gradient: 'from-orange-500 to-red-600',
    github: 'https://github.com/cwhui1001/Timeless-Tribute',
    demo: '#'
  },
  {
    title: 'Huan Fitness Pal',
    description: 'A user-friendly fitness platform designed to help users manage fitness goals. Provides personalized features including body weight tracking, gym and yoga class access, and customized progress charts.',
    technologies: ['Web Development', 'Full-Stack Development'],
    features: [
      'Fitness goal management',
      'Body weight tracking',
      'Gym and yoga class access',
      'Customized progress charts'
    ],
    category: 'Web App',
    icon: <Database className="w-6 h-6" />,
    gradient: 'from-blue-500 to-green-600',
    github: 'https://github.com/cwhui1001/huan_fitness_pal',
    demo: '#'
  },
  {
    title: 'MyEV Car Loan Calculator',
    description: 'A user-friendly mobile application designed to help users calculate car loan payments specifically for electric vehicles (EVs). Streamlines the financial planning process for EV purchases.',
    technologies: ['Mobile Application Development'],
    features: [
      'EV loan calculations',
      'User-friendly interface',
      'Financial planning tools',
      'Mobile optimization'
    ],
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    gradient: 'from-purple-500 to-blue-600',
    github: 'https://github.com/cwhui1001/MyEV',
    demo: 'https://github.com/cwhui1001/MyEV/releases/download/MyEV/app-debug.apk'
  },
  {
    title: 'MyToDo',
    description: 'A simple and efficient task management application that helps users organize and track daily tasks, reminders, and priorities. Personal note-taking app with full-stack development and mobile application features.',
    technologies: ['Full-Stack Development', 'Mobile Application Development'],
    features: [
      'Task organization',
      'Daily reminders',
      'Priority management',
      'Note-taking capabilities'
    ],
    category: 'Mobile',
    icon: <Code className="w-6 h-6" />,
    gradient: 'from-green-500 to-purple-600',
    github: 'https://github.com/cwhui1001/MyToDo',
    demo: 'https://github.com/cwhui1001/MyToDo/releases/download/MyToDo/app-debug.apk'
  },
  {
    title: 'SDG 13 - Climate Action',
    description: 'A dedicated website promoting SDG 13: Climate Action. Provides comprehensive information including climate change introduction, combat targets, upcoming events, and contribution opportunities through donations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Web Design', 'UI Design', 'UX'],
    features: [
      'Climate change education',
      'Event information',
      'Donation platform',
      'Responsive web design'
    ],
    category: 'Web App',
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-green-500 to-blue-600',
    github: 'https://github.com/cwhui1001/Climate-Action',
    demo: 'https://cwhui1001.github.io/Climate-Action/'
  }
]

const categories = ['All', 'Full Stack', 'Web App', 'Mobile', 'AI']

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating proficiency across various technologies 
            and problem-solving approaches.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                {/* Title and Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg text-white`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.demo !== '#' ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed opacity-60">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </span>
                  )}
                  
                  {project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed opacity-60">
                      <Github className="w-4 h-4" />
                      Private/Enterprise
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}