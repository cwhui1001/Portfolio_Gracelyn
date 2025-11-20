"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero-specific floating elements */}
      <div className="absolute inset-0 -z-10">
        {/* Enhanced hero floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.6, 0.8, 1.3, 1],
            rotate: [0, 180, 360, 270, 0],
            x: [0, 120, -80, 100, 0],
            y: [0, -80, 60, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 dark:opacity-50 transition-opacity duration-500"
          style={{
            background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3), rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3))'
          }}
        />
        
        <motion.div
          animate={{
            scale: [1, 1.8, 0.6, 1.4, 1],
            rotate: [360, 180, 0, 90, 360],
            x: [0, -180, 100, -150, 0],
            y: [0, 100, -60, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 dark:opacity-50 transition-opacity duration-500"
          style={{
            background: 'conic-gradient(from 180deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3), rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3))'
          }}
        />

        {/* Spectacular floating elements */}
        <motion.div
          animate={{
            scale: [1, 1.5, 0.7, 1.2, 1],
            rotate: [0, -180, -360, -90, 0],
            x: [0, 120, -60, 80, 0],
            y: [0, -50, 80, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-40 dark:opacity-60 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(ellipse 60% 40%, rgba(236, 72, 153, 0.3), rgba(251, 146, 60, 0.3), rgba(16, 185, 129, 0.3))'
          }}
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 0.8, 1.1, 1],
            rotate: [0, 240, 480, 120, 0],
            x: [0, -80, 120, -60, 0],
            y: [0, 60, -80, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
          className="absolute top-1/3 right-1/4 w-88 h-88 rounded-full blur-3xl opacity-35 dark:opacity-55 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(ellipse 40% 60%, rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))'
          }}
        />

        {/* Dynamic mesh gradient overlay */}
        <motion.div 
          className="absolute inset-0 opacity-25 dark:opacity-35 transition-opacity duration-500"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2), transparent 50%), radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2), transparent 50%)",
              "radial-gradient(circle at 60% 70%, rgba(120, 119, 198, 0.2), transparent 50%), radial-gradient(circle at 30% 80%, rgba(255, 119, 198, 0.2), transparent 50%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.2), transparent 50%)",
              "radial-gradient(circle at 80% 30%, rgba(120, 119, 198, 0.2), transparent 50%), radial-gradient(circle at 20% 60%, rgba(255, 119, 198, 0.2), transparent 50%), radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.2), transparent 50%)",
              "radial-gradient(circle at 40% 20%, rgba(120, 119, 198, 0.2), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 119, 198, 0.2), transparent 50%), radial-gradient(circle at 30% 60%, rgba(59, 130, 246, 0.2), transparent 50%)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
        />

        {/* Prismatic light streaks */}
        <motion.div
          className="absolute inset-0 opacity-20 dark:opacity-30"
          animate={{
            background: [
              "linear-gradient(45deg, transparent 0%, rgba(147, 51, 234, 0.15) 25%, transparent 50%, rgba(59, 130, 246, 0.15) 75%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.15) 25%, transparent 50%, rgba(236, 72, 153, 0.15) 75%, transparent 100%)",
              "linear-gradient(135deg, transparent 0%, rgba(245, 158, 11, 0.15) 25%, transparent 50%, rgba(147, 51, 234, 0.15) 75%, transparent 100%)",
              "linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.15) 25%, transparent 50%, rgba(16, 185, 129, 0.15) 75%, transparent 100%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
          style={{
            filter: 'blur(20px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative text-5xl md:text-7xl font-bold"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-pulse"
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Gracelyn Chong
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative text-2xl md:text-3xl font-semibold"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Wen Hui
            </motion.span>
          </motion.h2>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Passionate Software Developer & Technology Enthusiast
            <br />
            <span className="text-lg text-gray-500 dark:text-gray-500">
              Building innovative digital solutions with modern technologies
            </span>
          </motion.p>

          {/* CTA Buttons with Enhanced Gradients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href="#experience"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View Experience
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>

            <Link
              href="#contact"
              className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <Link
              href="https://www.linkedin.com/in/gracelyn-chong-wen-hui-015a80271/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" />
            </Link>
            <Link
              href="mailto:gracelyn@example.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}