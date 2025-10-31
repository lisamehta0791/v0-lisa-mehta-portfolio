"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Github, Linkedin, Twitter, Send, MessageSquare } from "lucide-react"

interface ContactProps {
  setActiveSection: (section: string) => void
}

export default function Contact({ setActiveSection }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative mb-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center slide-in-up">
          <span className="gradient-text">Let's Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 text-lg slide-in-up" style={{ animationDelay: "0.1s" }}>
          Ready to collaborate or just say hello? Reach out anytime!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 slide-in-left">
            {/* Email */}
            <div className="glass p-6 rounded-lg hover-lift interactive-card group border border-primary/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Email</p>
                  <a
                    href="mailto:lisamehta0791@gmail.com"
                    className="font-bold text-primary hover:text-accent transition-colors"
                  >
                    lisamehta0791@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass p-6 rounded-lg hover-lift interactive-card group border border-secondary/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Phone</p>
                  <a href="tel:8300269360" className="font-bold text-secondary hover:text-primary transition-colors">
                    +91 8300269360
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-lg hover-lift interactive-card border border-accent/30">
              <p className="text-sm font-bold text-accent mb-4 flex items-center gap-2">
                <MessageSquare size={18} />
                Follow & Connect
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Github, label: "GitHub", url: "#" },
                  { icon: Linkedin, label: "LinkedIn", url: "#" },
                  { icon: Twitter, label: "Twitter", url: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="w-full py-3 rounded-lg glass-hover flex items-center justify-center text-primary hover:text-accent transition-all font-bold border border-primary/30"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-lg hover-lift interactive-card border border-accent/30 slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card/50 border border-primary/40 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card/50 border border-primary/40 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card/50 border border-primary/40 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent text-foreground font-bold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 group hover-lift"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm text-center font-semibold animate-pulse">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
