import { Code2, Database, Brain, Users, Clock, Lightbulb, MessageSquare, Target } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: "Advanced", project: "Used in Restaurant Management System" },
        { name: "CSS", level: "Advanced", project: "Applied across multiple web projects" },
        { name: "JavaScript", level: "Intermediate", project: "Interactive chatbot & web apps" }
      ],
      icon: Code2,
      color: "primary"
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: "Intermediate", project: "Used in Restaurant Management System" },
        { name: "Python", level: "Intermediate", project: "Machine learning projects & automation" }
      ],
      icon: Code2,
      color: "secondary"
    },
    {
      title: "Database & Data",
      skills: [
        { name: "MySQL", level: "Intermediate", project: "Database design for various systems" },
        { name: "Machine Learning", level: "Beginner", project: "Predictive models & data analysis" }
      ],
      icon: Database,
      color: "accent"
    }
  ];

  const softSkills = [
    { name: "Project Management", icon: Target },
    { name: "Time Management", icon: Clock },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Teamwork", icon: Users }
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div 
                  key={categoryIndex} 
                  className="bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-border hover:border-primary/60 hover:shadow-hover transition-all duration-300 p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 bg-${category.color}/10 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-foreground">{skill.name}</span>
                          <span className={`text-sm font-medium text-${category.color}`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {skill.project}
                        </p>
                      </div>
                    ))}
                  </div>
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
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm rounded-xl border-2 border-accent/20 hover:border-accent/60 hover:shadow-hover transition-all duration-300 hover:-translate-y-1 px-6 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {skill.name}
                    </span>
                  </div>
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
