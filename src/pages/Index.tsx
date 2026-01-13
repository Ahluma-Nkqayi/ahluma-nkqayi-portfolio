import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CurrentFocus from "@/components/CurrentFocus";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CodeRainBackground from "@/components/CodeRainBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CodeRainBackground />
      <Navigation />
      <Hero />
      <CurrentFocus />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
