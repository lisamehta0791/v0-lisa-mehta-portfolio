"use client"

import { BarChart3, Code2, Wrench } from "lucide-react"

interface SkillsProps {
  setActiveSection: (section: string) => void
}

export default function Skills({ setActiveSection }: SkillsProps) {
  const technicalSkills = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "C++", level: 85, icon: "⚙️" },
    { name: "SQL", level: 80, icon: "💾" },
    { name: "JavaScript", level: 75, icon: "⚡" },
    { name: "TensorFlow", level: 80, icon: "🤖" },
    { name: "PyTorch", level: 78, icon: "🔥" },
  ]

  const softSkills = [
    "Analytical Thinking",
    "Problem Solving",
    "Team Collaboration",
    "Leadership",
    "Communication",
    "Time Management",
  ]

  const tools = [
    { name: "VS Code", icon: "📝" },
    { name: "Git & GitHub", icon: "🔀" },
    { name: "Jupyter", icon: "📓" },
    { name: "Google Colab", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Figma", icon: "🎨" },
    { name: "Terminal", icon: "💻" },
    { name: "Postman", icon: "📮" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center slide-in-up">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="md:col-span-2 glass p-8 rounded-lg hover-lift interactive-card slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-glow">Technical Skills</h3>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground flex items-center gap-2">
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-card rounded-full overflow-hidden border border-primary/20">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-primary/50"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass p-8 rounded-lg hover-lift interactive-card slide-in-right">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="text-secondary" size={28} />
              <h3 className="text-2xl font-bold text-glow-pink">Soft Skills</h3>
            </div>

            <div className="space-y-3">
              {softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-gradient-to-r from-secondary/15 to-accent/15 border border-secondary/40 hover:border-secondary/80 transition-all group cursor-pointer hover-lift"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm font-semibold text-foreground">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="glass p-8 rounded-lg hover-lift interactive-card mt-8 slide-in-up">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="text-accent" size={28} />
            <h3 className="text-2xl font-bold gradient-text">Tools & Platforms</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg glass border border-accent/30 text-center hover:border-accent/80 transition-all group cursor-pointer hover-lift interactive-card"
              >
                <p className="text-2xl mb-2 group-hover:scale-125 transition-transform">{tool.icon}</p>
                <p className="font-semibold text-sm text-accent group-hover:text-primary transition-colors">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
