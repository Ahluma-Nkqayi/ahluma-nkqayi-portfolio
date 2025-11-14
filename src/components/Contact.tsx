import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-3">
            Have a question or want to work together? I'd love to hear from you!
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I'm open to opportunities, collaborations, and exciting projects. Feel free to reach out!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-10 md:p-14 border-border/40 bg-card shadow-soft rounded-2xl backdrop-blur-sm">
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center gap-3 text-center">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <a 
                href="mailto:ahlumankqayi@gmail.com" 
                className="text-base md:text-lg text-foreground hover:text-primary transition-colors font-medium"
              >
                ahlumankqayi@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center gap-3 text-center">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-base md:text-lg text-foreground font-medium">
                073 715 5639
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-5 text-center">Connect with me</p>
              <div className="flex justify-center gap-8">
                <a 
                  href="https://www.linkedin.com/in/ahluma-nkqayi-532916234" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Ahluma-Nkqayi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;