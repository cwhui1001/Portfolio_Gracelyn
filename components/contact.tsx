"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
    alert('Message sent successfully! I\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or potential collaborations. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I'm currently available for new opportunities and 
                exciting projects.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'cwenhui10@gmail.com', href: 'mailto:cwenhui10@gmail.com', color: 'from-blue-600 to-purple-600' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+60 11-2313 7816', href: 'https://wa.me/601123137816', color: 'from-green-500 to-green-600' },
                { icon: MapPin, label: 'Location', value: 'Kuala Lumpur, Malaysia', href: null, color: 'from-purple-600 to-pink-600' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300"
                >
                  <div className={`p-3 bg-gradient-to-r ${item.color} rounded-lg text-white shadow-lg`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : undefined}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Connect with me on social media
              </h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/gracelyn-chong-wen-hui-015a80271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:bg-[#0077b5] hover:text-white text-muted-foreground rounded-xl transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/cwhui1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:bg-black hover:text-white text-muted-foreground rounded-xl transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-xl p-8 shadow-2xl border-t border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Send Me a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-input rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-200 text-foreground outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-input rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-200 text-foreground outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-input rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-200 text-foreground outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-input rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-200 text-foreground resize-none outline-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}