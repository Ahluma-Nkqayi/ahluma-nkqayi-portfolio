import { Github, Linkedin, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Ahluma-Nkqayi"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahluma-nkqayi-532916234"
  }, {
    icon: Figma,
    label: "Figma",
    href: "#"
  }];
  return <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(social => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ahluma Nkqayi. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Built with passion and creativity ✨
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;