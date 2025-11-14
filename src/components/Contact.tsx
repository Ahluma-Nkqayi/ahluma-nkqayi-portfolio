import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-12 border-primary/20 bg-card/50 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center justify-center gap-3 text-center">
              <Mail className="h-5 w-5 text-primary" />
              <a 
                href="mailto:ahlumankqayi@gmail.com" 
                className="text-lg text-foreground hover:text-primary transition-colors font-medium"
              >
                ahlumankqayi@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center gap-3 text-center">
              <Phone className="h-5 w-5 text-primary" />
              <a 
                href="tel:0737155639" 
                className="text-lg text-foreground hover:text-primary transition-colors font-medium"
              >
                073 715 5639
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground mb-4 text-center">Connect with me</p>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/ahluma-nkqayi-532916234" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Ahluma-Nkqayi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium">GitHub</span>
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