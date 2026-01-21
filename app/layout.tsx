import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedBackground } from '@/components/animated-background'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Gracelyn | Creative Developer",
  description: 'Portfolio of Gracelyn Chong Wen Hui - Crafting digital experiences with modern web technologies.',
  keywords: ['portfolio', 'software developer', 'web development', 'Next.js', 'React', 'Creative Developer'],
  authors: [{ name: 'Gracelyn Chong Wen Hui' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AnimatedBackground />
          <div className="min-h-screen relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}