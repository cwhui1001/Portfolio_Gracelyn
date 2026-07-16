"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, Sparkles, AlertCircle, Loader2, Minimize2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_QUESTIONS = [
  { text: 'What is Gracelyn\'s tech stack? 💻', query: 'What is Gracelyn\'s technology stack and skills?' },
  { text: 'Tell me about her projects 🚀', query: 'Can you tell me about some of Gracelyn\'s key projects?' },
  { text: 'Is she available for freelance? 💼', query: 'Is Gracelyn available for freelance website development?' },
  { text: 'How can I contact her? ✉️', query: 'How can I get in touch with Gracelyn?' },
  { text: 'Play badminton? 🏸', query: 'Does Gracelyn play badminton? Tell me about her hobbies!' }
]

const renderUrlButton = (url: string, customLabel?: string, key?: any) => {
  const isWhatsApp = url.includes('wa.me') || url.includes('whatsapp.com');
  const isLinkedIn = url.includes('linkedin.com');
  const isGitHub = url.includes('github.com');
  
  let gradientStyle = "from-blue-500 via-indigo-500 to-purple-600 text-white shadow-indigo-500/10";
  let displayLabel = url;
  
  if (customLabel && !customLabel.startsWith('http://') && !customLabel.startsWith('https://')) {
    // Check if custom label already has an emoji
    const hasEmoji = /[\uD800-\uDFFF]/.test(customLabel);
    if (hasEmoji) {
      displayLabel = customLabel;
    } else {
      if (isWhatsApp) displayLabel = `${customLabel} 💬`;
      else if (isLinkedIn) displayLabel = `${customLabel} 🔗`;
      else if (isGitHub) displayLabel = `${customLabel} 💻`;
      else displayLabel = `${customLabel} 🔗`;
    }
    
    // Set matching colors even with custom labels
    if (isWhatsApp) {
      gradientStyle = "from-emerald-500 to-teal-600 text-white shadow-emerald-500/10";
    } else if (isLinkedIn) {
      gradientStyle = "from-blue-500 to-indigo-600 text-white shadow-blue-500/10";
    } else if (isGitHub) {
      gradientStyle = "from-slate-700 via-slate-800 to-slate-900 text-white shadow-slate-500/10 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800";
    }
  } else {
    // Default smart labels
    if (isWhatsApp) {
      gradientStyle = "from-emerald-500 to-teal-600 text-white shadow-emerald-500/10";
      displayLabel = "WhatsApp Chat 💬";
    } else if (isLinkedIn) {
      gradientStyle = "from-blue-500 to-indigo-600 text-white shadow-blue-500/10";
      displayLabel = "LinkedIn Profile 🔗";
    } else if (isGitHub) {
      gradientStyle = "from-slate-700 via-slate-800 to-slate-900 text-white shadow-slate-500/10 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800";
      displayLabel = "GitHub Repo 💻";
    } else {
      try {
        const urlObj = new URL(url);
        displayLabel = urlObj.hostname + (urlObj.pathname !== '/' && urlObj.pathname.length < 15 ? urlObj.pathname : ' 🔗');
      } catch {
        displayLabel = "Visit Link 🔗";
      }
    }
  }

  return (
    <a
      key={key}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${gradientStyle} rounded-lg text-xs font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mx-1 my-0.5 align-middle cursor-pointer`}
    >
      {displayLabel}
    </a>
  );
};

const renderMessageContent = (content: string) => {
  const lines = content.split('\n');
  
  return lines.map((line, lineIndex) => {
    // Check if it's a list item
    const isListItem = line.trimStart().startsWith('* ') || line.trimStart().startsWith('- ');
    const lineText = isListItem ? line.trimStart().substring(2) : line;
    
    // Parse formatting: markdown links [label](url), bold, URLs, emails
    const tokenRegex = /(\[.*?\]\(https?:\/\/[^\s\)]+\)|\*\*.*?\*\*|https?:\/\/[^\s\)\(\[\]"']+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const parts = lineText.split(tokenRegex);
    
    const parsedLineContent = parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={partIndex} className="font-bold text-foreground dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      
      const isMarkdownLink = part.startsWith('[') && part.includes('](') && part.endsWith(')');
      if (isMarkdownLink) {
        const closeBracketIndex = part.indexOf('](');
        const label = part.substring(1, closeBracketIndex);
        const url = part.substring(closeBracketIndex + 2, part.length - 1);
        return (
          <span key={partIndex} className="inline-block">
            {renderUrlButton(url, label, partIndex)}
          </span>
        );
      }
      
      const isUrl = part.startsWith('http://') || part.startsWith('https://');
      if (isUrl) {
        let cleanUrl = part;
        let trailingPunctuation = '';
        const trailingMatch = part.match(/[.,;!?]+$/);
        if (trailingMatch) {
          cleanUrl = part.substring(0, part.length - trailingMatch[0].length);
          trailingPunctuation = trailingMatch[0];
        }
        
        return (
          <span key={partIndex} className="inline-block">
            {renderUrlButton(cleanUrl, undefined, partIndex)}
            {trailingPunctuation}
          </span>
        );
      }
      
      const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part);
      if (isEmail) {
        let cleanEmail = part;
        let trailingPunctuation = '';
        const trailingMatch = part.match(/[.,;!?]+$/);
        if (trailingMatch) {
          cleanEmail = part.substring(0, part.length - trailingMatch[0].length);
          trailingPunctuation = trailingMatch[0];
        }
        
        return (
          <span key={partIndex} className="inline-block">
            <a
              href={`mailto:${cleanEmail}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-rose-500 to-red-600 text-white rounded-lg text-xs font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mx-1 my-0.5 align-middle cursor-pointer"
            >
              Email Gracelyn ✉️
            </a>
            {trailingPunctuation}
          </span>
        );
      }
      
      return part;
    });

    if (isListItem) {
      return (
        <div key={lineIndex} className="flex items-start gap-2 my-1 pl-1">
          <span className="text-primary/70 dark:text-primary-foreground/70 mt-1 select-none">•</span>
          <div className="flex-1 text-foreground dark:text-gray-200">{parsedLineContent}</div>
        </div>
      );
    }
    
    return (
      <div key={lineIndex} className={lineText.trim() === '' ? 'h-2' : 'my-0.5 text-foreground dark:text-gray-200'}>
        {parsedLineContent}
      </div>
    );
  });
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Gracelyn's AI assistant. Ask me anything about her skills, experience, projects, or hobbies! 🚀"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading])

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: textToSend }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        })
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.isConfigured === false) {
          throw new Error('GEMINI_API_KEY is not configured on the server. Please add it to your environment variables.')
        }
        throw new Error(data.error || 'Failed to get response from assistant.')
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err: any) {
      console.error('Chat Error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(input)
  }

  return (
    <>
      {/* Speech Bubble / Tooltip */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0,
              y: [0, -6, 0]
            }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ 
              opacity: { delay: 1, duration: 0.4 },
              scale: { delay: 1, duration: 0.4 },
              x: { delay: 1, duration: 0.4 },
              y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }
            }}
            className="fixed bottom-6 right-24 z-50 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-card dark:bg-[#0c1220] text-xs font-semibold text-foreground shadow-2xl border-2 border-indigo-500/40 dark:border-indigo-400/50 select-none max-w-[240px] transition-all duration-300"
          >
            {/* Clickable text area to open chatbot */}
            <div 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity flex-1"
            >
              <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 animate-pulse" />
              <span className="leading-tight">Hi there, I'm Gracelyn's AI assistant!</span>
            </div>
            
            {/* Dismiss Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Avoid triggering outer onClick to open chatbot
                setShowTooltip(false);
              }}
              className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
              aria-label="Dismiss greeting"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-card dark:bg-[#0c1220] border-t-2 border-r-2 border-indigo-500/40 dark:border-indigo-400/50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button Glow */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-5 right-5 w-16 h-16 z-40 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 blur-md animate-pulse pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-full shadow-2xl focus:outline-none flex items-center justify-center border border-white/10"
        aria-label="Toggle chat assistant"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ 
          scale: 1.12,
          boxShadow: "0 0 25px rgba(99, 102, 241, 0.6), 0 0 50px rgba(168, 85, 247, 0.4)"
        }}
        whileTap={{ scale: 0.92 }}
        transition={{ 
          type: 'spring', 
          stiffness: 260, 
          damping: 20,
          boxShadow: { duration: 0.2 }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <Bot className="w-6 h-6 animate-pulse-soft" />
              <span className="absolute -top-4 -right-4 w-2.5 h-2.5 bg-green-500 rounded-full border-1 border-white dark:border-black animate-ping" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-[360px] sm:w-[400px] h-[520px] max-h-[calc(100vh-120px)] rounded-3xl z-50 flex flex-col glass overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-card/40 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground flex items-center gap-1.5 text-sm">
                    Gracelyn's AI Assistant
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-muted-foreground font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-md whitespace-pre-wrap'
                        : 'bg-card/80 border border-black/5 dark:border-white/5 text-foreground shadow-sm'
                    }`}
                  >
                    {msg.role === 'user' ? msg.content : renderMessageContent(msg.content)}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-card/80 border border-black/5 dark:border-white/5 text-foreground rounded-2xl px-4 py-2.5 text-sm flex items-center gap-2 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex justify-center my-2">
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl p-3 flex items-start gap-2 max-w-[90%]">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

             {/* Predefined Questions Chips */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 py-2 border-t border-black/5 dark:border-white/5">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Suggested Questions
                </p>
                <div className="flex flex-col items-start gap-1.5 pb-1">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q.query)}
                      className="text-xs px-2.5 py-1 bg-black/5 dark:bg-white/5 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary-foreground border border-black/10 dark:border-white/10 hover:border-primary/30 rounded-full transition-all text-muted-foreground font-medium text-left"
                    >
                      {q.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-black/10 dark:border-white/10 bg-card/20 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me something..."
                className="flex-1 px-4 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground/60 transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-md flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
