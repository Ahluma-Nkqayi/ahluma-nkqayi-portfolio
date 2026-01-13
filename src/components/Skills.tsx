import { 
  Database, 
  Code2, 
  BarChart3, 
  Globe, 
  GitBranch,
  Layout,
  Lightbulb, 
  MessageSquare, 
  Users, 
  Clock,
  Eye,
  Target
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "SQL & Database",
      icon: Database,
      skills: ["MySQL", "ERDs", "Views & Queries", "Database Design", "Data Modeling"]
    },
    {
      category: "Data & Analytics",
      icon: BarChart3,
      skills: ["Python (Data Analysis)", "Power BI", "Data Visualization", "Statistical Analysis"]
    },
    {
      category: "Web Development",
      icon: Globe,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"]
    },
    {
      category: "Tools & Workflow",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Figma", "API Integration"]
    }
  ];

  const softSkills = [
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Team Collaboration", icon: Users },
    { name: "Time Management", icon: Clock },
    { name: "Attention to Detail", icon: Eye },
    { name: "Goal-oriented", icon: Target }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/30 to-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building data-driven applications and insights
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-center font-display text-xl font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/40 hover:shadow-soft transition-all duration-300 p-5 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground">{category.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-2.5 py-1 text-xs font-medium bg-muted text-foreground rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-center font-display text-xl font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm rounded-lg border border-accent/20 hover:border-accent/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-105 px-4 py-2.5 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="font-medium text-sm text-foreground">
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
