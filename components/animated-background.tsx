"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* 
        Video Background 
        User Instructions:
        1. Place your video file in the 'public/videos' folder
        2. Rename it to 'background.mp4' (or update the src below)
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/background6.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        {/* <div className="absolute inset-0 bg-background" /> */}
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/60 dark:bg-black/60" />
      
      {/* Optional: Texture Overlay for better integration */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none mix-blend-overlay" />
    </div>
  )
}