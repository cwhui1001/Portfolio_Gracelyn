import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedBackground } from '@/components/animated-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Gracelyn's Portfolio",
  description: 'Professional portfolio of Gracelyn Chong Wen Hui - Software Developer & Technology Enthusiast',
  keywords: ['portfolio', 'software developer', 'web development', 'Next.js', 'React'],
  authors: [{ name: 'Gracelyn Chong Wen Hui' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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