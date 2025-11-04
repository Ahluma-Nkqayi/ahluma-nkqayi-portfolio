import { Github, Linkedin, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Figma, label: "Figma", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  onClick={() => window.open(social.href, "_blank")}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
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
    </footer>
  );
};

export default Footer;
