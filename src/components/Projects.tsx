import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Figma, Code, Database, BarChart } from "lucide-react";
import libraryImage from "@/assets/library-project.jpg";
import medicareImage from "@/assets/medicare-project.jpg";
import chatbotImage from "@/assets/chatbot-project.jpg";
import resumeImage from "@/assets/resume-project.jpg";
import youthPrototypeImage from "@/assets/youth-prototype.jpg";
import sentimentDashboardImage from "@/assets/sentiment-dashboard.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      problem: "Libraries needed an efficient way to track books, manage members, and automate borrowing workflows.",
      outcome: "Streamlined library operations with automated tracking and reduced manual work by 60%.",
      image: libraryImage,
      tags: ["Java", "MySQL", "Database Design"],
      icon: Database,
      links: {
        github: "https://github.com/Ahluma-Nkqayi/Library-Management-System.git"
      }
    },
    {
      title: "Sentiment Analysis Dashboard",
      problem: "Businesses struggle to understand customer sentiment from large volumes of text data.",
      outcome: "AI-powered analytics providing real-time sentiment detection and emotional pattern visualization.",
      image: sentimentDashboardImage,
      tags: ["AI", "Data Analytics", "Python", "Dashboard"],
      icon: BarChart,
      links: {
        demo: "https://sentiment-ai-1682327a.base44.app/"
      }
    },
    {
      title: "Random Forest Salary Prediction",
      problem: "Companies need data-driven insights for competitive salary benchmarking.",
      outcome: "ML model achieving 85%+ accuracy in salary predictions based on key employment features.",
      image: chatbotImage,
      tags: ["Python", "Machine Learning", "Data Science"],
      icon: BarChart,
      links: {
        github: "https://github.com/Ahluma-Nkqayi/Random-Forest-Salary-Prediction.git"
      }
    },
    {
      title: "Medicare Booking System",
      problem: "Healthcare facilities needed a streamlined appointment scheduling solution.",
      outcome: "Patient management platform with real-time availability tracking, reducing booking time by 50%.",
      image: medicareImage,
      tags: ["HTML", "CSS", "JavaScript", "MySQL"],
      icon: Database,
      links: {
        github: "https://github.com/Ahluma-Nkqayi/Medicare_Booking_System.git"
      }
    },
    {
      title: "Resume Builder App",
      problem: "Job seekers need professional, ATS-compatible resumes without design skills.",
      outcome: "Smart resume builder with template selection and PDF export for job-ready applications.",
      image: resumeImage,
      tags: ["React", "TypeScript", "Tailwind CSS"],
      icon: Code,
      links: {
        github: "https://github.com/Ahluma-Nkqayi/Resume-Generator.git"
      }
    },
    {
      title: "AI Chatbot",
      problem: "Users needed quick, accessible answers to AI-related questions.",
      outcome: "Interactive NLP-powered chatbot providing instant, accurate responses 24/7.",
      image: chatbotImage,
      tags: ["AI", "NLP", "Chatbot"],
      icon: Code,
      links: {
        demo: "https://landbot.online/v3/H-3158721-8RT63U43IP36BDKN/index.html"
      }
    },
    {
      title: "Youth in Power Prototype",
      problem: "Youth education platforms lack engaging, interactive learning experiences.",
      outcome: "High-fidelity Figma prototype demonstrating modern educational UX patterns.",
      image: youthPrototypeImage,
      tags: ["Figma", "UI/UX Design", "Prototype"],
      icon: Code,
      links: {
        figma: "https://www.figma.com/proto/JHN39GavsiQxhZcvp4OgKV/Youth-in-Power-Teachable-Machine?node-id=22-121&t=nNaSaFM8NZNr9MLe-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Data-driven solutions and web applications solving real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-hover transition-all duration-500 border-primary/20 hover:-translate-y-2 bg-card group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-36 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 p-1.5 bg-background/80 backdrop-blur-sm rounded-lg z-20">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
                
                <div className="p-4 space-y-2">
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground/80">Problem:</span> {project.problem}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-primary/80">Outcome:</span> {project.outcome}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-0.5 text-[9px] font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-1">
                    {project.links.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="h-7 text-xs border-primary/30 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all duration-200"
                        onClick={() => window.open(project.links.github, "_blank")}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        View Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="h-7 text-xs border-primary/30 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all duration-200"
                        onClick={() => window.open(project.links.demo, "_blank")}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.figma && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="h-7 text-xs border-primary/30 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all duration-200"
                        onClick={() => window.open(project.links.figma, "_blank")}
                      >
                        <Figma className="h-3 w-3 mr-1" />
                        Prototype
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
