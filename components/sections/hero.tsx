"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }))
    setParticles(newParticles)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
            style={{
              left: `${particle.left}%`,
              bottom: "-10px",
              animation:
                particle.id % 2 === 0
                  ? `cosmic-drift 5s ease-out ${particle.delay}s forwards`
                  : `cosmic-drift-reverse 5s ease-out ${particle.delay}s forwards`,
              animationIterationCount: "infinite",
              boxShadow: "0 0 10px rgba(0, 212, 255, 0.6)",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-25 blur-3xl aurora-glow-shimmer"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-accent rounded-full opacity-20 blur-2xl float"></div>

            <div className="absolute inset-0 animate-spin rounded-full" style={{ animationDuration: "25s" }}>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary border-b-accent"></div>
            </div>

            <div className="relative w-full h-full rounded-full glass-glow flex items-center justify-center group hover-glow overflow-hidden">
              <div className="absolute inset-2 rounded-full border border-primary/30 group-hover:border-primary/60 transition-all z-20"></div>
              <div className="profile-circle-container">
                <Image
                  src="/profile.jpg"
                  alt="Lisa Mehta"
                  width={300}
                  height={300}
                  className="profile-circle"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight slide-in-down">
          <span className="neon-flicker block">Lisa Mehta</span>
        </h1>

        <p
          className="text-lg md:text-2xl text-primary mb-2 font-bold flex items-center justify-center gap-2 slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Sparkles size={24} className="animate-pulse aurora-glow" />
          <span className="text-reveal">AI & Robotics Engineer</span>
        </p>

        <p
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Transforming ideas into intelligent solutions | B.Tech CSE (AI & Robotics) at VIT Chennai | Building the
          future with technology
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() => handleScroll("projects")}
            className="group glass-glow px-8 py-4 rounded-lg border-2 border-primary text-primary font-bold flex items-center gap-2 transition-all hover-lift glow-expand"
          >
            <span>Explore My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent text-foreground font-bold hover:shadow-xl transition-all hover-lift glow-pulse relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity translate-x-[-100%] group-hover:translate-x-[100%] duration-700"></div>
          </button>
        </div>

        <div className="mt-16 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2 glow-pulse">
            <div className="w-1 h-2 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
