import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Figma } from "lucide-react";
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
      description: "A comprehensive system for managing library resources, including book tracking, member management, and borrowing workflows.",
      image: libraryImage,
      tags: ["Java", "MySQL", "UI/UX"],
      links: {
        github: "https://github.com/Ahluma-Nkqayi/Library-Management-System.git"
      }
    },
    {
      title: "Medicare Booking System",
      description: "Healthcare appointment scheduling platform with patient management and real-time availability tracking.",
      image: medicareImage,
      tags: ["HTML", "CSS", "JavaScript", "MySQL"],
      links: {
        github: "https://github.com/Ahluma-Nkqayi/Medicare_Booking_System.git"
      }
    },
    {
      title: "AI Chatbot",
      description: "Interactive chatbot powered by artificial intelligence to answer general AI questions with natural language processing capabilities.",
      image: chatbotImage,
      tags: ["AI", "Natural Language Processing", "Chatbot"],
      links: {
        demo: "https://landbot.online/v3/H-3158721-8RT63U43IP36BDKN/index.html"
      }
    },
    {
      title: "Youth in Power Prototype",
      description: "Educational platform prototype designed to empower youth with interactive learning modules and engagement features.",
      image: youthPrototypeImage,
      tags: ["Figma", "UI/UX Design", "Prototype"],
      links: {
        figma: "https://www.figma.com/proto/JHN39GavsiQxhZcvp4OgKV/Youth-in-Power-Teachable-Machine?node-id=22-121&t=nNaSaFM8NZNr9MLe-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1"
      }
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "AI-powered analytics dashboard for real-time sentiment detection and visualization of emotional patterns in data.",
      image: sentimentDashboardImage,
      tags: ["AI", "Data Analytics", "Dashboard"],
      links: {
        demo: "https://sentiment-ai-1682327a.base44.app/"
      }
    },
    {
      title: "Random Forest Salary Prediction",
      description: "Machine learning model using Random Forest algorithm to predict salaries based on various features and data analysis.",
      image: chatbotImage,
      tags: ["Python", "Machine Learning", "Data Science"],
      links: {
        github: "https://github.com/Ahluma-Nkqayi/Random-Forest-Salary-Prediction.git"
      }
    },
    {
      title: "Resume Builder App",
      description: "Smart resume builder with ATS compatibility checker, template selection, and PDF export functionality.",
      image: resumeImage,
      tags: ["React", "TypeScript", "Tailwind CSS"],
      links: {
        github: "https://github.com/Ahluma-Nkqayi/Resume-Generator.git"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            A showcase of innovative solutions I've built, from web applications to AI-powered tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-hover transition-all duration-500 border-primary/20 hover:-translate-y-2 bg-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.links.github && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/5"
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/5"
                      onClick={() => window.open(project.links.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.links.figma && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/5"
                      onClick={() => window.open(project.links.figma, "_blank")}
                    >
                      <Figma className="h-4 w-4 mr-2" />
                      Prototype
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
