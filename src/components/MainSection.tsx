"use client"

import type React from "react"
import Image from "next/image"

import { useEffect, useRef, useState } from "react"

export default function AlternatingSection({
  imageSources = {
    first: "/portada/portada_1.png",
    second: "/portada/portada_2.png",
    third: "/portada/portada_3.png",
  },
}: {
  imageSources?: {
    first: string
    second: string
    third: string
  }
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* First section: Image left, text right */}
      <ScrollSection>
        <div className="w-full md:w-1/2 flex justify-center">
          <ScrollImage src={imageSources.first} alt="Vetlinex Laboratory" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-foreground">
            Bienvenidos al Laboratorio Vetlinex
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Somos un laboratorio veterinario farmacéutico comprometido con la prevención, el tratamiento y el cuidado
            integral de la salud animal. Nuestra misión es proteger el bienestar de las mascotas, ofreciendo
            medicamentos y productos veterinarios confiables, eficaces y accesibles.
          </p>
        </div>
      </ScrollSection>

      {/* Second section: Image right, text left */}
      <ScrollSection reverse>
        <div className="w-full md:w-1/2 flex justify-center">
          <ScrollImage src={imageSources.second} alt="Our Mission" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-foreground">Misión</h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Proteger el bienestar de las mascotas, ofreciendo medicamentos y productos veterinarios confiables, eficaces
            y accesibles, que garanticen no solo su salud, sino también la tranquilidad de cada familia.
          </p>
        </div>
      </ScrollSection>

      {/* Third section: Image left, text right */}
      <ScrollSection>
        <div className="w-full md:w-1/2 flex justify-center">
          <ScrollImage src={imageSources.third} alt="Our Vision" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-foreground">Visión</h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Con una visión clara hacia el futuro, trabajamos para consolidarnos como la compañía líder en productos
            veterinarios, reconocida por la calidad, innovación y compromiso que ponemos en cada solución para la salud
            animal.
          </p>
        </div>
      </ScrollSection>
    </div>
  )
}

function ScrollSection({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  )
}

function ScrollImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(0.9)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScale(1)
        } else {
          setScale(0.9)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="w-80 transition-transform duration-700 ease-out" style={{ transform: `scale(${scale})` }}>
      <Image src={src || "/placeholder.svg"} alt={alt} width={320} height={320} className="w-full h-auto" />
    </div>
  )
}

