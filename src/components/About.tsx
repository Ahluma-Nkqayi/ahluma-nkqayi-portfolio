import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      icon: GraduationCap,
      title: "Diploma in ICT: Applications Development",
      level: "Third Year Student",
      description: "Comprehensive study in software development, databases, and system design"
    },
    {
      icon: Award,
      title: "NQF Level 5 in Systems Support",
      level: "Certified",
      description: "Advanced technical support and system management skills"
    },
    {
      icon: BookOpen,
      title: "Higher Certificate in ICT",
      level: "Completed",
      description: "Foundation in Information Communication and Technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate developer currently pursuing my Diploma in ICT: Applications Development. 
            My journey in technology has been driven by curiosity and a desire to create meaningful 
            solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-hover transition-all duration-300 border-primary/20 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">{item.level}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
            Professional Development
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Completed a comprehensive Work Readiness Workshop by Gateway Consultancy and 
            Professional Development, gaining essential workplace skills and professional competencies.
          </p>
          <div className="flex items-center gap-2 text-accent font-medium">
            <Award className="h-5 w-5" />
            <span>17 Modules Completed on Coursera</span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
