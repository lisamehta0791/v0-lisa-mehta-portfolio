"use client"

import { Cpu, Rocket, Brain, Zap } from "lucide-react"

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  const features = [
    { icon: Brain, label: "AI Focused", color: "text-primary" },
    { icon: Rocket, label: "Innovation", color: "text-secondary" },
    { icon: Cpu, label: "Tech Stack", color: "text-accent" },
    { icon: Zap, label: "Quick Learner", color: "text-primary" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center slide-in-up">
          <span className="gradient-text">About Me</span>
        </h2>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-lg text-center hover-lift interactive-card group scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <feature.icon
                className={`${feature.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                size={28}
              />
              <p className="font-semibold text-sm text-foreground">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* About content grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass p-8 rounded-lg hover-lift interactive-card slide-in-left">
            <h3 className="text-2xl font-bold text-glow mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a first-year B.Tech CSE student at VIT Chennai, specializing in AI & Robotics. With a passion for
              transforming technology into solutions, I blend theoretical knowledge with practical innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey combines hands-on technical skills, participation in advanced workshops, and active engagement
              with cutting-edge AI/ML research and development.
            </p>
          </div>

          <div className="glass p-8 rounded-lg hover-lift interactive-card slide-in-right">
            <h3 className="text-2xl font-bold text-glow-pink mb-4">What Drives Me</h3>
            <ul className="space-y-4">
              {[
                "Building intelligent solutions with AI/ML",
                "Exploring robotics and automation",
                "Continuous learning and growth",
                "Contributing to tech innovation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interests grid */}
        <div className="glass p-8 rounded-lg hover-lift interactive-card">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">My Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Deep Learning",
              "Neural Networks",
              "Data Science",
              "Robotics",
              "Computer Vision",
              "NLP",
            ].map((interest, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/15 border border-primary/30 text-center hover:border-primary/60 transition-all group cursor-pointer"
              >
                <p className="text-sm font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
