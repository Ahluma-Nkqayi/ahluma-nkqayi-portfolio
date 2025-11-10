import { GraduationCap, Award, BookOpen, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Education = () => {
  const [showCertificates, setShowCertificates] = useState(false);

  const certificates = [
    {
      title: "Emotional Intelligence",
      file: "/certificates/emotional-intelligence.pdf"
    },
    {
      title: "Enhancing Communication Skills",
      file: "/certificates/enhancing-communication-skills.pdf"
    },
    {
      title: "Finding Your Professional Voice",
      file: "/certificates/finding-professional-voice.pdf"
    },
    {
      title: "Introduction to Personal Branding",
      file: "/certificates/introduction-personal-branding.pdf"
    }
  ];

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
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-hover transition-all duration-300 border-primary/20 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
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

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
            Professional Development
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Completed a comprehensive Work Readiness Workshop by Gateway Consultancy and 
            Professional Development, gaining essential workplace skills and professional competencies.
          </p>
          <button
            onClick={() => setShowCertificates(true)}
            className="flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors cursor-pointer"
          >
            <Award className="h-5 w-5" />
            <span className="underline decoration-dotted">17 Modules Completed on Coursera</span>
          </button>
        </Card>

        <Dialog open={showCertificates} onOpenChange={setShowCertificates}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Coursera Certificates</DialogTitle>
              <DialogDescription>
                View and download my completed Coursera module certificates
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 mt-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="font-medium">{cert.title}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = cert.file;
                      link.download = `${cert.title}.pdf`;
                      link.click();
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Education;
