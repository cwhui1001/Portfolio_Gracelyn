"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Settings } from 'lucide-react'

// Helper function for external image URLs
const devicon = (name: string, type: string = 'original') => 
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${type}.svg`

type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools'

interface Skill {
  name: string
  image: string
  color: string // Keep for text/glow effects
  description: string
  category: SkillCategory
}

// Enhanced Skill Data with Real Logos
const skillsData: Skill[] = [
  // Frontend (Top Right)
  { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', color: 'text-blue-400', description: 'Building dynamic and interactive user interfaces', category: 'Frontend' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'text-white', description: 'Production-ready React framework', category: 'Frontend' },
  { name: 'TypeScript', image: devicon('typescript'), color: 'text-blue-500', description: 'Typed JavaScript for robust code', category: 'Frontend' },
  { name: 'Tailwind', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: 'text-cyan-400', description: 'Utility-first CSS framework', category: 'Frontend' },
  { name: 'HTML5', image: devicon('html5'), color: 'text-orange-500', description: 'Structure and semantics of the web', category: 'Frontend' },
  { name: 'CSS3', image: devicon('css3'), color: 'text-blue-500', description: 'Styling and layout of web pages', category: 'Frontend' },
  { name: 'JavaScript', image: devicon('javascript'), color: 'text-yellow-300', description: 'Interactive logic for the web', category: 'Frontend' },
  { name: 'Blazor', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png', color: 'text-purple-500', description: 'Interactive web UIs with C#', category: 'Frontend' },

  // Backend (Bottom Right)
  { name: 'Node.js', image: devicon('nodejs'), color: 'text-green-500', description: 'JavaScript runtime for backend', category: 'Backend' },
  { name: 'Python', image: devicon('python'), color: 'text-yellow-400', description: 'Versatile language for AI & Backend', category: 'Backend' },
  { name: 'PHP', image: devicon('php'), color: 'text-indigo-400', description: 'Server-side scripting', category: 'Backend' },
  { name: 'Laravel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1280px-Laravel.svg.png', color: 'text-red-500', description: 'Elegant PHP framework', category: 'Backend' },
  { name: 'Scala', image: devicon('scala'), color: 'text-red-500', description: 'Scalable language for JVM', category: 'Backend' },
  { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', color: 'text-teal-400', description: 'High-performance Python framework', category: 'Backend' },
  { name: 'Docker', image: devicon('docker'), color: 'text-blue-500', description: 'Containerization for deployment', category: 'Backend' },

  // Database & Cloud (Bottom Left)
  { name: 'MySQL', image: devicon('mysql'), color: 'text-blue-600', description: 'Relational database management', category: 'Database' },
  { name: 'Supabase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', color: 'text-green-400', description: 'Open source Firebase alternative', category: 'Database' },
  { name: 'Firebase', image: devicon('firebase', 'plain'), color: 'text-yellow-500', description: 'Google\'s mobile platform', category: 'Database' },
  
  // Tools (Top Left)
  { name: 'Git', image: devicon('git'), color: 'text-orange-500', description: 'Version control system', category: 'Tools' },
  { name: 'Figma', image: devicon('figma'), color: 'text-purple-400', description: 'Collaborative interface design', category: 'Tools' },
  { name: 'VS Code', image: devicon('vscode'), color: 'text-blue-400', description: 'Powerful source code editor', category: 'Tools' },
  { name: 'Canva', image: 'https://www.edigitalagency.com.au/wp-content/uploads/Canva-logo-PNG-large-size.png', color: 'text-blue-400', description: 'Graphic design platform', category: 'Tools' },
  { name: 'Draw.io', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/960px-Diagrams.net_Logo.svg.png', color: 'text-orange-400', description: 'Diagramming and flowcharting', category: 'Tools' },
  { name: 'n8n', image: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/n8n-color.png', color: 'text-red-400', description: 'Workflow automation tool', category: 'Tools' },
]

const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Project Management',
  'Communication',
  'Critical Thinking',
  'Adaptability',
  'Leadership',
  'Time Management'
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)

  // Group skills by category
  const categories: { [key in SkillCategory]: Skill[] } = {
    'Frontend': skillsData.filter(s => s.category === 'Frontend'),
    'Backend': skillsData.filter(s => s.category === 'Backend'),
    'Database': skillsData.filter(s => s.category === 'Database'),
    'Tools': skillsData.filter(s => s.category === 'Tools'),
  }

  // Configuration for quadrants
  const quadrantConfig = {
    'Frontend': { startAngle: -90, endAngle: 0, labelX: 120, labelY: -120 },      // Top Right
    'Backend': { startAngle: 0, endAngle: 90, labelX: 120, labelY: 120 },         // Bottom Right
    'Database': { startAngle: 90, endAngle: 180, labelX: -120, labelY: 120 }, // Bottom Left
    'Tools': { startAngle: 180, endAngle: 270, labelX: -120, labelY: -120 },      // Top Left
  }

  const radius = 420

  const getSkillPosition = (category: SkillCategory, index: number, total: number) => {
    const config = quadrantConfig[category]
    // Add padding to start and end angles to create gaps between quadrants
    const padding = 10
    const availableArc = (config.endAngle - config.startAngle) - (padding * 2)
    
    // Distribute items evenly within the available arc
    // If only 1 item, put it in middle
    const step = total > 1 ? availableArc / (total - 1) : 0
    const angle = config.startAngle + padding + (step * index)
    
    const radian = (angle * Math.PI) / 180
    
    // x = r * cos(theta), y = r * sin(theta)
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian),
      rotate: angle // To rotate the icon container if needed (visual flair)
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-pink-500 mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across 
            various technologies and frameworks.
          </p>
        </motion.div>

        {/* Static Divided Circle Section */}
        <div className="relative w-full h-[950px] mb-20 flex items-center justify-center overflow-hidden">
           
           {/* Center Content */}
           <div className="absolute z-20 text-center max-w-xs pointer-events-none flex flex-col items-center justify-center h-full">
             {activeSkill ? (
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 key={activeSkill.name}
               >
                 <div className="w-32 h-32 mb-6 relative mx-auto">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src={activeSkill.image} 
                     alt={activeSkill.name}
                     className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                   />
                 </div>
                 <h3 className="text-3xl font-bold mb-2 text-foreground">{activeSkill.name}</h3>
                 <p className="text-muted-foreground text-lg">{activeSkill.description}</p>
                 <div className="mt-4 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 inline-block text-sm font-medium text-secondary">
                   {activeSkill.category}
                 </div>
               </motion.div>
             ) : (
               <div className="text-muted-foreground/50 text-xl font-light">
                 Hover over a skill<br/>to view details
               </div>
             )}
           </div>

           {/* Background Glows */}
           <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

           {/* The Circle Container */}
           <div className="relative w-[840px] h-[840px]">
              
              {/* Quadrant Dividers/Backgrounds (Optional visual application) */}
              <div className="absolute inset-0 rounded-full border border-black/5 dark:border-white/5 opacity-50" />
              
              {/* Render Divider Lines */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/5 dark:bg-white/5 -translate-x-1/2" />
              <div className="absolute left-0 right-0 top-1/2 h-px bg-black/5 dark:bg-white/5 -translate-y-1/2" />

              {/* Render Skills by Category */}
              {(Object.keys(categories) as SkillCategory[]).map((category) => {
                 const skills = categories[category]
                 const config = quadrantConfig[category]
                 
                 return (
                   <div key={category}>
                     {/* Category Label */}
                     <div 
                       className="absolute text-lg font-bold text-muted-foreground/50 tracking-widest uppercase pointer-events-none"
                       style={{ 
                         left: '50%', 
                         top: '50%', 
                         transform: `translate(calc(-50% + ${config.labelX * 1.6}px), calc(-50% + ${config.labelY * 1.6}px))`
                       }}
                      >
                       {category}
                     </div>

                     {/* Skills in this Quadrant */}
                     {skills.map((skill, index) => {
                       const pos = getSkillPosition(category, index, skills.length)
                       
                       return (
                         <motion.div
                            key={skill.name}
                            className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                              scale: 1, 
                              opacity: 1,
                              x: pos.x,
                              y: pos.y
                            }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                         >
                           <motion.button
                              whileHover={{ scale: 1.2 }}
                              onClick={() => setActiveSkill(skill)}
                              onMouseEnter={() => setActiveSkill(skill)}
                              className={`flex items-center justify-center transition-all duration-300 ${activeSkill?.name === skill.name ? 'scale-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]'}`}
                           >
                              <div className="w-16 h-16 relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img 
                                  src={skill.image} 
                                  alt={skill.name}
                                  className="w-full h-full object-contain transition-all duration-300"
                                />
                              </div>
                           </motion.button>
                         </motion.div>
                       )
                     })}
                   </div>
                 )
              })}
           </div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card rounded-3xl p-8 shadow-2xl border-t border-black/10 dark:border-white/10"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 via-teal-400 to-pink-500 rounded-lg text-white shadow-lg">
                <Settings className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Soft Skills
              </h3>
            </div>
            <p className="text-muted-foreground">
              Essential interpersonal and professional skills that complement my technical expertise
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="group cursor-default"
              >
                <div className="bg-background/50 border border-border/50 rounded-lg p-4 text-center hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary/30 transition-all duration-300">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '25+', label: 'Technologies Mastered', color: 'text-blue-500' },
              { number: '3+', label: 'Years of Experience', color: 'text-purple-500' },
              { number: '100%', label: 'Commitment to Learning', color: 'text-green-500' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card rounded-3xl p-6 hover:bg-primary/5 transition-all duration-300"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}