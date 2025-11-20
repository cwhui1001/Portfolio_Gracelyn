"use client"

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Enhanced light mode animated gradient */}
      <motion.div 
        className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-700"
        animate={{
          background: [
            "radial-gradient(ellipse 200% 100% at 50% 0%, #e0f2fe 0%, #e1f5fe 20%, #f3e5f5 40%, #fce4ec 60%, #fff3e0 80%, #e8f5e8 100%)",
            "radial-gradient(ellipse 150% 120% at 20% 30%, #f3e5f5 0%, #e1f5fe 25%, #fff3e0 50%, #fce4ec 75%, #e0f2fe 100%)",
            "radial-gradient(ellipse 180% 90% at 80% 70%, #fff3e0 0%, #e8f5e8 20%, #e0f2fe 40%, #f3e5f5 60%, #fce4ec 80%, #e1f5fe 100%)",
            "radial-gradient(ellipse 160% 110% at 50% 100%, #fce4ec 0%, #fff3e0 25%, #e8f5e8 50%, #e0f2fe 75%, #f3e5f5 100%)"
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Enhanced dark mode animated gradient */}
      <motion.div 
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700"
        animate={{
          background: [
            "radial-gradient(ellipse 200% 100% at 50% 0%, #0a0e27 0%, #1a1b3a 20%, #2d1b69 40%, #4c1d95 60%, #581c87 80%, #6b21a8 100%)",
            "radial-gradient(ellipse 150% 120% at 20% 30%, #2d1b69 0%, #0f172a 25%, #1e293b 50%, #4c1d95 75%, #581c87 100%)",
            "radial-gradient(ellipse 180% 90% at 80% 70%, #1e293b 0%, #334155 20%, #0a0e27 40%, #2d1b69 60%, #4c1d95 80%, #6b21a8 100%)",
            "radial-gradient(ellipse 160% 110% at 50% 100%, #4c1d95 0%, #1e293b 25%, #334155 50%, #0a0e27 75%, #2d1b69 100%)"
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Dynamic floating aurora effect */}
      <motion.div
        className="absolute inset-0 opacity-60 dark:opacity-80"
        animate={{
          background: [
            "conic-gradient(from 0deg at 20% 30%, rgba(147, 51, 234, 0.3) 0deg, transparent 60deg, rgba(59, 130, 246, 0.3) 120deg, transparent 180deg, rgba(16, 185, 129, 0.3) 240deg, transparent 300deg)",
            "conic-gradient(from 90deg at 60% 70%, rgba(59, 130, 246, 0.3) 0deg, transparent 60deg, rgba(16, 185, 129, 0.3) 120deg, transparent 180deg, rgba(236, 72, 153, 0.3) 240deg, transparent 300deg)",
            "conic-gradient(from 180deg at 80% 20%, rgba(16, 185, 129, 0.3) 0deg, transparent 60deg, rgba(236, 72, 153, 0.3) 120deg, transparent 180deg, rgba(147, 51, 234, 0.3) 240deg, transparent 300deg)",
            "conic-gradient(from 270deg at 40% 80%, rgba(236, 72, 153, 0.3) 0deg, transparent 60deg, rgba(147, 51, 234, 0.3) 120deg, transparent 180deg, rgba(59, 130, 246, 0.3) 240deg, transparent 300deg)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        style={{
          filter: 'blur(80px)'
        }}
      />

      {/* Floating geometric shapes with enhanced animations */}
      <motion.div
        animate={{
          scale: [1, 1.5, 0.8, 1.2, 1],
          rotate: [0, 180, 360, 180, 0],
          x: [0, 150, -50, 100, 0],
          y: [0, -100, 50, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full opacity-20 dark:opacity-30 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))',
          filter: 'blur(2px)'
        }}
      />

      <motion.div
        animate={{
          scale: [1, 0.7, 1.3, 0.9, 1],
          rotate: [0, -270, -90, -180, 0],
          x: [0, -180, 80, -120, 0],
          y: [0, 80, -60, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/3 right-1/4 w-32 h-32 opacity-15 dark:opacity-25 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.4), rgba(16, 185, 129, 0.4))',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          filter: 'blur(1px)'
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.4, 0.6, 1.1, 1],
          rotate: [0, 360, 180, 270, 0],
          x: [0, 200, -100, 150, 0],
          y: [0, -150, 80, -100, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
        className="absolute top-1/2 right-1/6 w-28 h-28 rounded-full opacity-25 dark:opacity-35 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.4), rgba(245, 158, 11, 0.4), rgba(239, 68, 68, 0.4))',
          filter: 'blur(3px)'
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 0.8, 1.3, 1],
          rotate: [0, 120, 240, 90, 0],
          x: [0, -100, 120, -80, 0],
          y: [0, 150, -80, 120, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/4 left-1/6 w-36 h-36 opacity-20 dark:opacity-30 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(225deg, rgba(139, 69, 19, 0.3), rgba(220, 38, 127, 0.3), rgba(168, 85, 247, 0.3))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'blur(2px)'
        }}
      />

      {/* Animated particle system */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-40 transition-opacity duration-500"
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 30%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 40%), radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 35%), radial-gradient(circle at 70% 10%, rgba(16, 185, 129, 0.1) 0%, transparent 30%), radial-gradient(circle at 30% 90%, rgba(245, 158, 11, 0.1) 0%, transparent 40%)",
            "radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 35%), radial-gradient(circle at 60% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 30%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 40%), radial-gradient(circle at 90% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 35%)",
            "radial-gradient(circle at 60% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 35%), radial-gradient(circle at 20% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 30%), radial-gradient(circle at 40% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 35%), radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 60%, rgba(99, 102, 241, 0.1) 0%, transparent 40%), radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 30%), radial-gradient(circle at 20% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 35%), radial-gradient(circle at 90% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 40%), radial-gradient(circle at 60% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 30%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      />

      {/* Dynamic mesh gradient with multiple layers */}
      <motion.div 
        className="absolute inset-0 opacity-40 dark:opacity-60 mix-blend-soft-light transition-opacity duration-500"
        animate={{
          background: [
            "linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.05) 50%, transparent 70%), linear-gradient(135deg, transparent 20%, rgba(168, 85, 247, 0.05) 60%, transparent 80%)",
            "linear-gradient(90deg, transparent 40%, rgba(236, 72, 153, 0.05) 50%, transparent 60%), linear-gradient(180deg, transparent 30%, rgba(16, 185, 129, 0.05) 70%, transparent 90%)",
            "linear-gradient(135deg, transparent 35%, rgba(245, 158, 11, 0.05) 55%, transparent 75%), linear-gradient(225deg, transparent 25%, rgba(99, 102, 241, 0.05) 65%, transparent 85%)"
          ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Prismatic light rays */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        animate={{
          background: [
            "linear-gradient(0deg, transparent 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)",
            "linear-gradient(60deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)",
            "linear-gradient(120deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)",
            "linear-gradient(180deg, transparent 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}
        style={{
          transform: 'scale(1.5)',
          filter: 'blur(40px)'
        }}
      />
    </div>
  )
}