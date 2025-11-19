"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern design, secure payment integration, and real-time inventory management. Built with React and Node.js for optimal performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: [
      'Responsive design for all devices',
      'Secure payment processing',
      'Real-time inventory tracking',
      'Admin dashboard for management'
    ],
    category: 'Full Stack',
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface for enhanced productivity.',
    technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
    features: [
      'Real-time collaboration',
      'Drag-and-drop interface',
      'Team management system',
      'Progress tracking & analytics'
    ],
    category: 'Web App',
    icon: <Code className="w-6 h-6" />,
    gradient: 'from-green-500 to-teal-600'
  },
  {
    title: 'Mobile Banking App UI',
    description: 'Modern mobile banking interface design with focus on user experience, accessibility, and security. Prototype built with React Native for cross-platform compatibility.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Figma'],
    features: [
      'Biometric authentication',
      'Transaction history',
      'Budget tracking',
      'Cross-platform compatibility'
    ],
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for business intelligence with real-time data visualization, custom reports, and advanced filtering capabilities for data-driven decisions.',
    technologies: ['Angular', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    features: [
      'Real-time data visualization',
      'Custom report generation',
      'Advanced filtering system',
      'Export functionality'
    ],
    category: 'Analytics',
    icon: <Database className="w-6 h-6" />,
    gradient: 'from-orange-500 to-red-600'
  }
]

const categories = ['All', 'Full Stack', 'Web App', 'Mobile', 'Analytics']

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
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                    <Github className="w-4 h-4" />
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}