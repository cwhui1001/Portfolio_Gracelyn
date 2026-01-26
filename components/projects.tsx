"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Code, Smartphone, Globe, Database, ChevronLeft, ChevronRight, X, Activity, Utensils, Cpu, FileText } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Health Tracker',
    description: 'A comprehensive health and wellness management application built with Scala and JavaFX. It enables users to monitor and track various aspects of their health including exercise routines, sleep patterns, mood fluctuations, and personal health data.',
    technologies: ['Scala', 'JavaFX', 'Scalafx', 'ScalikeJDBC', 'Apache Derby'],
    features: [
      'User Authentication',
      'Exercise Tracking',
      'Sleep Monitoring',
      'Mood Tracking',
      'Health Alerts',
      'User Profiles'
    ],
    images: [
      '/images/projects/health-tracker/overview.png',
      '/images/projects/health-tracker/sleep.png',
      '/images/projects/health-tracker/workout.png',
      '/images/projects/health-tracker/mood.png'
    ],
    categories: ['Full Stack'],
    icon: <Activity className="w-6 h-6" />,
    gradient: 'from-rose-500 to-pink-600',
    github: 'https://github.com/sunwaydcis/final-project-cwhui1001', // Private/Enterprise project
    demo: '#' // Private/Enterprise project
  },
  {
    title: 'Nutrition Tracker (Eat Smart AI)',
    description: 'A comprehensive, AI-powered nutrition management platform designed to help users reach their health goals through intelligent tracking, personalized meal planning, and detailed analysis. Built with modern web technologies and powered by the Baidu Ernie 5.0 Thinking model (with support from Ernie 4.0-8K) Large Language Model.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Baidu AI'],
    features: [
      'User Dashboard',
      'AI-powered Food Analysis',
      'Personalized Meal Plans',
      'Calorie Tracking',
      'Daily Summary',
      'AI Nutritionist'
    ],
    images: [
      '/images/projects/eat-smart-ai/dashboard.png',
      '/images/projects/eat-smart-ai/food-analyzer.png',
      '/images/projects/eat-smart-ai/meal-planner.png',
      '/images/projects/eat-smart-ai/daily-summary.png'
    ],
    categories: ['Full Stack', 'AI'],
    icon: <Utensils className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-green-600',
    github: 'https://github.com/Aiyern30/nutrition-tracker', 
    demo: 'https://eat-smart-ai.vercel.app/' 
  },
  {
    title: 'Smart Bin System',
    description: 'A smart waste management system that utilizes IoT technology to optimize waste collection efficiency. The system features real-time monitoring of bin levels, fire alerts, and data analytics to improve waste management operations.',
    technologies: ['IOT', 'Arduino', 'ESP8266', 'MQTT', 'Firebase','ThingSpeak', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Real-time bin level monitoring',
      'Automatic lid opening and closing',
      'Fire Alerts notification',
      'Data analytics',
      'Waste management optimization'
    ],
    images: [
      '/images/projects/smart-bin-system/prototype.jpeg',
      '/images/projects/smart-bin-system/dashboard.png', 
      '/images/projects/smart-bin-system/components.jpeg',
      '/images/projects/smart-bin-system/arduinoide.png' 
    ],
    categories: ['IOT'],
    icon: <Cpu className="w-6 h-6" />,
    gradient: 'from-amber-500 to-orange-600',
    github: 'https://github.com/cwhui1001/IOT-SmartBin',
    demo: 'https://youtu.be/EmBA_GKYHOo'
  },
  {
    title: 'SAP Invoice Management Portal',
    description: 'A comprehensive invoice management system built with SAP ERP integration. Features full-stack development with modern React frontend and robust Node.js backend, utilizing Supabase for data management.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'FinTech', 'SAP ERP', 'n8n', 'OCR'],
    features: [
      'SAP ERP integration',
      'OCR-based invoice data extraction',
      'n8n workflow automation',
      'Real-time invoice processing',
      'Full-stack development',
      'Modern responsive design'
    ],
    images: [
      '/images/projects/sap-invoice-management/dashboard.png',
      '/images/projects/sap-invoice-management/invoice-list.png',
      '/images/projects/sap-invoice-management/profile-setting.png',
      '/images/projects/sap-invoice-management/upload-invoices.png'
    ],
    categories: ['Full Stack'],
    icon: <FileText className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-violet-600',
    github: 'https://github.com/cwhui1001/SAPInvoiceOCR', // Private/Enterprise project
    demo: '#' // Private/Enterprise project
  },
  
  {
    title: 'SAP Support Chatbot',
    description: 'An intelligent AI-powered chatbot designed to provide automated support for SAP-related queries. Built with artificial intelligence capabilities to enhance user experience and reduce support response time.',
    technologies: ['C#', 'Blazor', 'Artificial Intelligence (AI)', 'Chatbot Development'],
    features: [
      'AI-powered responses',
      'SAP system integration',
      'Automated support queries',
      'Real-time assistance'
    ],
    images: [
      '/images/projects/sap-support-chatbot/chat-interface.png'
    ],
    categories: ['AI'],
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
    images: [
      '/images/projects/brighterus/homepage.png',
      '/images/projects/brighterus/university-search.png',
      '/images/projects/brighterus/features.png',
      '/images/projects/brighterus/admin-dashboard.png'
    ],
    categories: ['Web App'],
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
    images: [
      '/images/projects/timeless-tribute/login.png',
      '/images/projects/timeless-tribute/home-screen.png',
      '/images/projects/timeless-tribute/memorial-view.png',
      '/images/projects/timeless-tribute/service-booking.png'
    ],
    categories: ['Mobile'],
    icon: <Smartphone className="w-6 h-6" />,
    gradient: 'from-orange-500 to-red-600',
    github: 'https://github.com/cwhui1001/Timeless-Tribute',
    demo: '#'
  },
  {
    title: 'Huan Fitness Pal',
    description: 'A user-friendly fitness platform designed to help users manage fitness goals. Provides personalized features including body weight tracking, gym and yoga class access, and customized progress charts.',
    technologies: ['Web Development', 'Full-Stack Development','PHP','Xampp'],
    features: [
      'Fitness goal management',
      'Body weight tracking',
      'Gym and yoga class access',
      'Customized progress charts'
    ],
    images: [
      '/images/projects/huan-fitness-pal/dashboard.png'
    ],
    categories: ['Web App'],
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
    images: [
      '/images/projects/myev-car-loan/main-screen.png'
    ],
    categories: ['Mobile'],
    icon: <Smartphone className="w-6 h-6" />,
    gradient: 'from-purple-500 to-blue-600',
    github: 'https://github.com/cwhui1001/MyEV',
    demo: 'https://github.com/cwhui1001/MyEV/releases/download/MyEV/app-debug.apk'
  },
  {
    title: 'MyToDo',
    description: 'A simple and efficient task management application that helps users organize and track daily tasks, reminders, and priorities.',
    technologies: ['Mobile Application Development'],
    features: [
      'Task organization',
      'Daily reminders',
      'Priority management',
      'Note-taking capabilities'
    ],
    images: [
      '/images/projects/mytodo/task-list.png'
    ],
    categories: ['Mobile'],
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
    images: [
      '/images/projects/sdg-climate-action/homepage.png',
      '/images/projects/sdg-climate-action/targets.png',
      '/images/projects/sdg-climate-action/news.png',
      '/images/projects/sdg-climate-action/actions.png'
    ],
    categories: ['Web App'],
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-green-500 to-blue-600',
    github: 'https://github.com/cwhui1001/Climate-Action',
    demo: 'https://cwhui1001.github.io/Climate-Action/'
  }
]

const categories = ['All', 'Full Stack', 'Web App', 'Mobile', 'AI', 'IOT']

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>([])

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory))

  const openImageModal = (images: string[], index: number, projectTitle: string) => {
    setCurrentProjectImages(images)
    setCurrentImageIndex(index)
    setSelectedImage({ src: images[index], alt: `${projectTitle} - Screenshot ${index + 1}` })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setCurrentProjectImages([])
    setCurrentImageIndex(0)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentProjectImages.length === 0) return
    
    let newIndex: number
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? currentProjectImages.length - 1 : currentImageIndex - 1
    } else {
      newIndex = currentImageIndex === currentProjectImages.length - 1 ? 0 : currentImageIndex + 1
    }
    
    setCurrentImageIndex(newIndex)
    setSelectedImage({
      src: currentProjectImages[newIndex],
      alt: `Screenshot ${newIndex + 1}`
    })
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-pink-500 mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 via-teal-400 to-pink-500 text-white border-transparent shadow-lg shadow-blue-500/25'
                  : 'bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/50 border-input'
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
              className={`group glass-card rounded-xl overflow-hidden ${index === filteredProjects.length - 1 && filteredProjects.length % 2 !== 0 ? 'md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto' : ''}`}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                {/* Title and Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg text-white`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.categories.join(', ')}
                    </span>
                  </div>
                </div>

                {/* Project Screenshots Gallery */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Project Screenshots:</h4>
                  
                  {/* Main Featured Image */}
                  <div className="mb-4">
                    <div
                      className="relative w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden cursor-pointer group/main shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => openImageModal(project.images, 0, project.title)}
                    >
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - Main Screenshot`}
                        fill
                        className="object-cover group-hover/main:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/main:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/main:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/95 dark:bg-gray-900/95 rounded-full p-3 shadow-lg">
                          <ExternalLink className="w-5 h-5 text-gray-900 dark:text-white" />
                        </div>
                      </div>
                      {/* Image Badge */}
                      <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full text-xs font-medium text-gray-900 dark:text-white">
                        Main View
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {project.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-3">
                      {project.images.slice(1).map((image, imageIndex) => (
                        <div
                          key={imageIndex + 1}
                          className="relative aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer group/thumb shadow-sm hover:shadow-md transition-all duration-300"
                          onClick={() => openImageModal(project.images, imageIndex + 1, project.title)}
                        >
                          <Image
                            src={image}
                            alt={`${project.title} - Screenshot ${imageIndex + 2}`}
                            fill
                            className="object-cover group-hover/thumb:scale-110 transition-transform duration-400"
                            sizes="(max-width: 768px) 33vw, 20vw"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 dark:bg-gray-900/90 rounded-full p-2">
                              <ExternalLink className="w-3 h-3 text-gray-900 dark:text-white" />
                            </div>
                          </div>
                          {/* Thumbnail Number */}
                          <div className="absolute top-2 right-2 bg-black/60 text-white px-1.5 py-0.5 rounded text-xs font-medium">
                            {imageIndex + 2}
                          </div>
                        </div>
                      ))}
                      
                      {/* View All Button if more than 4 images */}
                      {project.images.length > 4 && (
                        <div
                          className="relative aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg cursor-pointer group/viewall shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
                          onClick={() => openImageModal(project.images, 1, project.title)}
                        >
                          <div className="text-center text-white">
                            <ExternalLink className="w-6 h-6 mx-auto mb-1" />
                            <span className="text-xs font-medium">
                              +{project.images.length - 4} more
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
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
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-teal-400 to-pink-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
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

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Navigation Buttons */}
            {currentProjectImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative max-h-[80vh] max-w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
                priority
              />
            </div>

            {/* Image Counter */}
            {currentProjectImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {currentProjectImages.length}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </section>
  )
}