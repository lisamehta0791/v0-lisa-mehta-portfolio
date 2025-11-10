"use client"

import { ExternalLink, Github, Star, TrendingUp } from "lucide-react"
import Image from "next/image"

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

export default function Projects({ setActiveSection }: ProjectsProps) {
  const projects = [
    {
      title: "Advanced Image Classification AI",
      description:
        "Deep CNN model trained on custom dataset achieving 95% accuracy. Includes data preprocessing, augmentation, and model optimization.",
      tech: ["Python", "TensorFlow", "PyTorch", "NumPy"],
      link: "#",
      status: "In Development",
      icon: "🤖",
      impact: "High",
      image: "/ai-neural-network.png",
    },
    {
      title: "Sentiment Analysis Engine",
      description:
        "State-of-the-art NLP model using transformer architecture for real-time sentiment classification with 92% precision.",
      tech: ["NLP", "BERT", "Hugging Face", "Python"],
      link: "#",
      status: "Completed",
      icon: "💬",
      impact: "High",
      image: "/sentiment-analysis-data-visualization.jpg",
    },
    {
      title: "Autonomous Robot Navigator",
      description:
        "Advanced path planning system using A* and RRT algorithms for real-time obstacle avoidance in dynamic environments.",
      tech: ["C++", "ROS", "Robotics", "Algorithm Design"],
      link: "#",
      status: "In Development",
      icon: "🚀",
      impact: "Critical",
      image: "/robot-navigation-algorithm.jpg",
    },
    {
      title: "AI Portfolio Platform",
      description:
        "Modern portfolio with glassmorphism design, smooth animations, and responsive interface showcasing technical capabilities.",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      link: "#",
      status: "Completed",
      icon: "✨",
      impact: "Medium",
      image: "/modern-portfolio-interface-design.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center slide-in-up">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 text-lg slide-in-up" style={{ animationDelay: "0.1s" }}>
          Showcasing innovative AI/ML solutions and technical excellence
        </p>

        <div className="grid gap-6 mb-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass p-0 rounded-lg group hover-lift interactive-card border border-primary/20 hover:border-primary/60 transition-all slide-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-glow group-hover:neon-pulse">{project.title}</h3>
                        <div className="flex gap-3 mt-2 flex-wrap">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                              project.status === "Completed"
                                ? "bg-green-500/20 text-green-300 border border-green-500/40"
                                : "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                            }`}
                          >
                            {project.status === "Completed" ? "✓" : "⚡"}
                            {project.status}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/40 flex items-center gap-1">
                            <TrendingUp size={14} />
                            {project.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-primary/25 to-secondary/25 border border-primary/50 text-primary hover:border-primary transition-all group-hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Links */}
                    <div className="flex gap-4 flex-wrap">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 text-primary hover:from-primary/40 hover:to-secondary/40 transition-all font-semibold border border-primary/30"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary hover:from-secondary/40 hover:to-accent/40 transition-all font-semibold border border-secondary/30"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center glass p-12 rounded-lg border border-primary/30 hover-lift interactive-card slide-in-up relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <Star className="mx-auto mb-4 text-accent animate-pulse" size={36} />
            <p className="text-xl text-foreground mb-2 font-bold">
              More <span className="text-glow">Projects</span> Coming Soon
            </p>
            <p className="text-muted-foreground">Continuously innovating and building cutting-edge AI/ML solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
