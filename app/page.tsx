"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Tech background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10">
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
    </div>
  )
}
