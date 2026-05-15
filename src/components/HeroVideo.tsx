"use client"

import { useEffect, useRef, useState } from "react"

interface HeroVideoProps {
  primaryVideo: string
  secondaryVideo: string
  className?: string
}

export default function HeroVideo({ primaryVideo, secondaryVideo, className = "" }: HeroVideoProps) {
  const primaryVideoRef = useRef<HTMLVideoElement>(null)
  const secondaryVideoRef = useRef<HTMLVideoElement>(null)
  const [currentVideo, setCurrentVideo] = useState<"primary" | "secondary">("primary")

  useEffect(() => {
    const primaryVid = primaryVideoRef.current
    const secondaryVid = secondaryVideoRef.current

    if (!primaryVid || !secondaryVid) return

    const handlePrimaryEnded = () => {
      setCurrentVideo("secondary")
      secondaryVid.currentTime = 0
      secondaryVid.play()
    }

    const handleSecondaryEnded = () => {
      setCurrentVideo("primary")
      primaryVid.currentTime = 0
      primaryVid.play()
    }

    primaryVid.addEventListener("ended", handlePrimaryEnded)
    secondaryVid.addEventListener("ended", handleSecondaryEnded)

    // Start playing the primary video
    primaryVid.play()

    return () => {
      primaryVid.removeEventListener("ended", handlePrimaryEnded)
      secondaryVid.removeEventListener("ended", handleSecondaryEnded)
    }
  }, [])

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Primary Video */}
      <video
        ref={primaryVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          currentVideo === "primary" ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        preload="auto"
      >
        <source src={primaryVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Secondary Video */}
      <video
        ref={secondaryVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          currentVideo === "secondary" ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        preload="auto"
      >
        <source src={secondaryVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for content */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="text-center text-white z-10">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Title</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Descripción Opcional?
          </p> */}
        </div>
      </div>
    </div>
  )
}
