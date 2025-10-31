"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const handleScroll = (id: string) => {
    setActiveSection(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-primary/30 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleScroll("home")}
            className="text-2xl font-bold text-glow hover:neon-pulse transition-all cursor-pointer"
          >
            LM
          </button>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-primary bg-primary/15 border border-primary/40"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-accent transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-primary/20 pt-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeSection === link.id
                    ? "text-primary bg-primary/20 border border-primary/40"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
