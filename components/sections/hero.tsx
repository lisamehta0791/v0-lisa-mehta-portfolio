"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }))
    setParticles(newParticles)
  }, [])

  const handleScroll = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary rounded-full particle-float"
            style={{
              left: `${particle.left}%`,
              bottom: "-10px",
              animation:
                particle.id % 2 === 0
                  ? `particle-float 3s ease-out ${particle.delay}s forwards`
                  : `particle-float-left 3s ease-out ${particle.delay}s forwards`,
              animationIterationCount: "infinite",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile image with enhanced glow */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-40 blur-3xl aurora-glow"></div>
            <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ animationDuration: "20s" }}>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary"></div>
            </div>
            <div className="relative w-full h-full rounded-full glass flex items-center justify-center hover-glow">
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center">
                <span className="text-5xl md:text-7xl font-bold text-glow">LM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero text with enhanced styling */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight slide-in-down">
          <span className="neon-pulse">Lisa Mehta</span>
        </h1>

        <p
          className="text-lg md:text-2xl text-primary mb-2 font-bold flex items-center justify-center gap-2 slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Sparkles size={24} className="animate-pulse" />
          AI & Robotics Engineer
        </p>

        <p
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Transforming ideas into intelligent solutions | B.Tech CSE (AI & Robotics) at VIT Chennai | Building the
          future with technology
        </p>

        {/* CTA Buttons with enhanced styling */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() => handleScroll("projects")}
            className="group glass-hover px-8 py-4 rounded-lg border-2 border-primary text-primary font-bold flex items-center gap-2 transition-all hover-lift"
          >
            <span>Explore My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent text-foreground font-bold hover:shadow-lg hover:shadow-primary/50 transition-all hover-lift"
          >
            Let's Connect
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
