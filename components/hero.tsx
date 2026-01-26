"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, 100])

  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number }[]>([])
  const [codeStreams, setCodeStreams] = useState<Array<{ id: number; left: string; duration: number; delay: number }>>([])

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }))
    setStars(newStars)

    // Generate code streams
    const streams = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + 5 + '%',
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))
    setCodeStreams(streams)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        
        {/* Starfield - Theme aware */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-foreground rounded-full opacity-0"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Falling Code Streams - Matrix Style */}
        {/* Floating Code Particles */}
        {codeStreams.map((stream) => (
          <motion.div
            key={stream.id}
            className="absolute font-mono text-xs md:text-sm font-bold text-primary/30 pointer-events-none select-none"
            style={{
              left: stream.left,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: stream.duration / 2,
              repeat: Infinity,
              delay: stream.delay,
              ease: "easeInOut",
            }}
          >
            {['<Code />', '{...props}', 'async', 'await', '=>', 'npm install', 'git push', 'Next.js', 'React', 'Tailwind'][stream.id % 10]}
          </motion.div>
        ))}



        {/* Main Gradient Orb (Top Left) */}
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-blue-500/40 via-teal-400/20 to-transparent blur-3xl"
        />
        
        {/* Secondary Orb (Bottom Right) */}
        <motion.div
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-pink-500/40 via-blue-500/20 to-transparent blur-3xl"
        />

        {/* Mesh Overlay */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-20 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center md:text-left order-2 md:order-1 relative"
          >
            

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4 hover:bg-primary/20 transition-colors cursor-default"
            >
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
                <span className="text-gradient drop-shadow-sm">Gracelyn Chong</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide text-foreground">
                Wen Hui
              </h2>
            </div>

           

            {/* Description */}
            {/* Description */}
            <div className="space-y-4 max-w-lg mx-auto md:mx-0">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                <span className="text-gradient">Innovative Software Developer & Tech Explorer</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building <span className="text-primary font-semibold mx-1">innovative</span> 
                digital solutions that bridge the gap between imagination and reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center pt-4"
            >
              <Link
                href="#experience"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-teal-400 to-pink-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  View Experience
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>

              <Link
                href="#contact"
                className="group px-8 py-4 rounded-full font-semibold glass-card text-foreground hover:bg-secondary/20 transition-all duration-300 hover:scale-105 active:scale-95 border-primary/20 hover:border-primary/50"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 pt-6">
              {[
                { href: "https://www.linkedin.com/in/gracelyn-chong-wen-hui-015a80271/", icon: Linkedin, color: "hover:text-blue-500 hover:border-blue-500/50" },
                { href: "https://github.com/cwhui1001", icon: Github, color: "hover:text-purple-500 hover:border-purple-500/50" },
                { href: "https://wa.me/601123137816", icon: MessageCircle, color: "hover:text-green-500 hover:border-green-500/50" },
                { href: "mailto:cwenhui10@gmail.com", icon: Mail, color: "hover:text-red-500 hover:border-red-500/50" }
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 rounded-full glass-card transition-all duration-300 hover:scale-110 border border-white/10 hover:shadow-lg",
                    social.color
                  )}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Image Display Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            {/* Animated Blob Background for Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-teal-400 to-pink-500 blur-3xl opacity-20 animate-pulse" />
            
            <div 
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
            >
              <div 
                className="w-full h-full relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-white/10"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  boxShadow: "0 0 40px rgba(0,0,0,0.2)"
                }}
              >
                {/* 
                 * Static Image Source
                 * Replace '/images/profile.png' with your actual image path.
                 * If the file doesn't exist, Next.js Image might complain or show broken, 
                 * so ensuring the file is there is "backend's" (user's) responsibility.
                */}
                <Image
                  src="/images/hero/Gracelyn-profile2.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>


            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
            <ChevronDown className="w-6 h-6 opacity-50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
