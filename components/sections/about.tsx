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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl -z-10 blob-rotate"></div>
      <div
        className="absolute bottom-0 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10 blob-rotate"
        style={{ animationDelay: "5s" }}
      ></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center slide-in-up">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-glow p-6 rounded-lg text-center hover-lift interactive-card group scale-in glow-expand"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <feature.icon
                className={`${feature.color} mx-auto mb-3 group-hover:scale-125 transition-all duration-300 group-hover:drop-shadow-lg`}
                size={32}
              />
              <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {feature.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass-glow p-8 rounded-lg hover-lift interactive-card slide-in-left glow-expand group flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-glow mb-2">Ready to Innovate</h3>
            <p className="text-center text-muted-foreground group-hover:text-foreground/90 transition-colors">
              Let's build something amazing together
            </p>
          </div>

          <div className="glass-glow p-8 rounded-lg hover-lift interactive-card slide-in-right glow-expand group">
            <h3 className="text-2xl font-bold text-glow mb-4 group-hover:neon-flicker">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors">
              I'm a first-year B.Tech CSE student at VIT Chennai, specializing in AI & Robotics. With a passion for
              transforming technology into solutions, I blend theoretical knowledge with practical innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors">
              My journey combines hands-on technical skills, participation in advanced workshops, and active engagement
              with cutting-edge AI/ML research and development.
            </p>

            <div className="mt-6 space-y-3">
              <h4 className="text-lg font-bold text-secondary mb-3">What Drives Me</h4>
              {[
                "Building intelligent solutions with AI/ML",
                "Exploring robotics and automation",
                "Continuous learning and growth",
                "Contributing to tech innovation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/item:w-3 group-hover/item:h-3 transition-all group-hover/item:glow-pulse"></div>
                  <span className="text-foreground group-hover/item:text-primary transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-glow p-8 rounded-lg hover-lift interactive-card slide-in-up glow-expand">
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
                className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/40 text-center hover:border-primary/80 transition-all group cursor-pointer glow-expand"
              >
                <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors group-hover:scale-110 inline-block">
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
