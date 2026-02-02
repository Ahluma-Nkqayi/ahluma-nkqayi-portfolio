import { GraduationCap, Award, BookOpen, Download, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const certificates = [{
    title: "Emotional Intelligence",
    file: "/certificates/emotional-intelligence.pdf"
  }, {
    title: "Enhancing Communication Skills",
    file: "/certificates/enhancing-communication-skills.pdf"
  }, {
    title: "Finding Your Professional Voice",
    file: "/certificates/finding-professional-voice.pdf"
  }, {
    title: "Introduction to Personal Branding",
    file: "/certificates/introduction-personal-branding.pdf"
  }];

  const courseraBadges = [
    {
      title: "Work Readiness Program",
      url: "https://coursera.org/share/7c161e3460f6e8cce1fb803543d48e2c"
    },
    {
      title: "Professional Development",
      url: "https://coursera.org/share/71cb844b1135ffa7dfa5d40b5411bb2e"
    }
  ];

  const education = [{
    icon: GraduationCap,
    title: "Diploma in ICT: Applications Development",
    level: "Completed",
    description: "Comprehensive study in software development, databases, and system design"
  }, {
    icon: Award,
    title: "NQF Level 5 in Systems Support",
    level: "Certified",
    description: "Advanced technical support and system management skills"
  }, {
    icon: BookOpen,
    title: "Higher Certificate in ICT",
    level: "Completed",
    description: "Foundation in Information Communication and Technology"
  }];

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
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300 border-primary/20 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
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

        {/* Coursera Completion Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {courseraBadges.map((badge, index) => (
            <a
              key={index}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Badge 
                variant="outline" 
                className="px-4 py-2 text-sm font-medium border-primary/30 bg-card/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <Award className="h-4 w-4 text-accent" />
                {badge.title}
                <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </Badge>
            </a>
          ))}
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
            <Award className="h-4 w-4" />
            View Certificates
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
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="font-medium">{cert.title}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => {
                    const link = document.createElement('a');
                    link.href = cert.file;
                    link.download = `${cert.title}.pdf`;
                    link.click();
                  }}>
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
