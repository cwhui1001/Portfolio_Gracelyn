import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="none"
        >
          <defs>
            <linearGradient id="gold_gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF2AC" />
              <stop offset="40%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="jewel_red" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF8BA7" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id="jewel_blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <filter id="dropShadow">
               <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="rgba(0,0,0,0.3)"/>
            </filter>
          </defs>
          
          {/* Main Crown Body */}
          <path
            d="M4 24H28L26 8L19 16L16 4L13 16L6 8L4 24Z"
            fill="url(#gold_gradient)"
            stroke="#B45309"
            strokeWidth="1"
            strokeLinejoin="round"
            filter="url(#dropShadow)"
          />
          
          {/* Crown Base Detail */}
          <rect x="4" y="24" width="24" height="4" rx="1" fill="#B45309" opacity="0.2" />
          <rect x="5" y="23" width="22" height="3" rx="0.5" fill="url(#gold_gradient)" stroke="#B45309" strokeWidth="0.5" />

          {/* Center Jewel (Ruby) */}
          <circle cx="16" cy="18" r="2" fill="url(#jewel_red)" stroke="#991B1B" strokeWidth="0.5" />
          
          {/* Side Jewels (Diamonds/Stars) */}
          <circle cx="9" cy="16" r="1.2" fill="white" fillOpacity="0.8" />
          <circle cx="23" cy="16" r="1.2" fill="white" fillOpacity="0.8" />
          
          {/* Top Tips Balls */}
          <circle cx="16" cy="4" r="1.5" fill="#FFD700" stroke="#B45309" strokeWidth="0.5" />
          <circle cx="6" cy="8" r="1.5" fill="#FFD700" stroke="#B45309" strokeWidth="0.5" />
          <circle cx="26" cy="8" r="1.5" fill="#FFD700" stroke="#B45309" strokeWidth="0.5" />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
