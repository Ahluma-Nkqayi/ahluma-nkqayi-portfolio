import { Briefcase, Code2, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Hi, I'm Ahluma — a Junior Software Developer and Data Analyst passionate about turning raw data into meaningful insights and building applications that solve real problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            As a diploma-qualified Applications Development graduate, I specialize in SQL, Python, and data visualization with Power BI. My experience at CAPACITI has sharpened my skills in data analysis and collaborative development.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm driven by the challenge of transforming complex datasets into actionable business intelligence while building user-friendly web applications that make a real impact.
          </p>
          
          {/* Quick highlights */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Database className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">SQL & Data Analysis</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
              <Code2 className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">CAPACITI Associate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
