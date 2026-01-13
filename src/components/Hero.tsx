import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <p className="text-accent font-medium text-lg">Hello, I'm</p>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground">
                Ahluma Nkqayi
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                Junior Software Developer | Data & SQL Enthusiast
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-lg">
                Diploma-qualified Applications Development graduate with hands-on experience at CAPACITI, building data-driven and web-based solutions that solve real-world problems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
                size="lg"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all duration-300"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv.pdf';
                  link.download = 'Ahluma_Nkqayi_CV.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 max-h-[400px]">
              <img 
                src={heroImage} 
                alt="Ahluma Nkqayi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="cursor-pointer hover:text-primary transition-colors hover:scale-110 active:scale-95"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-8 w-8 text-primary/50" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
