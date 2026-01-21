"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, 100])

  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number }[]>([])

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }))
    setStars(newStars)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        
        {/* Starfield - Theme aware (white in dark mode, dark in light mode) */}
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

        {/* Shooting Stars - Theme aware */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`meteor-${i}`}
              className="absolute h-0.5 w-0.5 bg-foreground rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
              style={{
                top: Math.random() * 50 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                x: [-100, 300],
                y: [-100, 300],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                width: [0, 100, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 4 + Math.random() * 2,
                ease: "linear",
              }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[50px] h-[1px] bg-gradient-to-r from-transparent to-foreground" />
            </motion.div>
          ))}
        </div>

        {/* Main Gradient Orb (Top Left) */}
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/40 via-secondary/20 to-transparent blur-3xl"
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
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-secondary/40 via-primary/20 to-transparent blur-3xl"
        />

        {/* Floating Accent Orbs */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/30 blur-[100px]"
        />

        {/* Mesh Overlay with Parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
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

          {/* Name with enhanced gradient */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-gradient drop-shadow-sm">Gracelyn Chong</span>
            <br />
            <span className="text-foreground mt-2 block text-4xl md:text-6xl font-light tracking-wide">Wen Hui</span>
          </h1>

          {/* Headline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Software Developer & Technology Enthusiast.
            <br />
            Building <span className="text-primary font-semibold relative inline-block">
              innovative
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span> digital solutions.
          </p>

          {/* CTA Buttons - Using Glass and Gradients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Link
              href="#experience"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95"
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

          {/* Social Links - Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6 pt-10"
          >
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
                  "p-4 rounded-full glass-card transition-all duration-300 hover:scale-110 border border-white/10 hover:shadow-lg",
                  social.color
                )}
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </motion.div>
        </motion.div>

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
