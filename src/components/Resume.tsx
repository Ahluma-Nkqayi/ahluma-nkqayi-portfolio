import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Ahluma_Nkqayi_CV.pdf';
    link.click();
  };
  return <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Resume
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                Download My CV   
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Get a detailed overview of my education, skills, projects, and professional experience 
                in PDF format.
              </p>
            </div>

            <Button onClick={handleDownload} size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};
export default Resume;