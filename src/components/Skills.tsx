import { Code2, Database, Brain, Users, Clock, Lightbulb, MessageSquare, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", percentage: 95, icon: Code2 },
    { name: "CSS", percentage: 90, icon: Code2 },
    { name: "JavaScript", percentage: 88, icon: Code2 },
    { name: "Java", percentage: 85, icon: Code2 },
    { name: "Python", percentage: 82, icon: Code2 },
    { name: "MySQL", percentage: 80, icon: Database },
    { name: "Machine Learning", percentage: 75, icon: Brain }
  ];

  const softSkills = [
    { name: "Project Management", percentage: 90, icon: Target },
    { name: "Time Management", percentage: 88, icon: Clock },
    { name: "Problem Solving", percentage: 92, icon: Lightbulb },
    { name: "Communication", percentage: 85, icon: MessageSquare },
    { name: "Teamwork", percentage: 90, icon: Users }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-center font-display text-2xl font-semibold text-foreground mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-primary/20 hover:border-primary/60 hover:shadow-hover transition-all duration-300 hover:-translate-y-1 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </span>
                    <span className="ml-auto text-lg font-bold text-primary">
                      {skill.percentage}%
                    </span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-center font-display text-2xl font-semibold text-foreground mb-8">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-accent/20 hover:border-accent/60 hover:shadow-hover transition-all duration-300 hover:-translate-y-1 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </span>
                    <span className="ml-auto text-lg font-bold text-accent">
                      {skill.percentage}%
                    </span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
