const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate developer currently in my third year of the Diploma in ICT: Applications Development. 
            My journey in technology has been driven by curiosity and a desire to create meaningful 
            solutions that make a difference.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a strong foundation in both frontend and backend development, machine learning, 
            and project management, I thrive on building applications that solve real-world problems. 
            I'm constantly learning, growing, and seeking opportunities to contribute to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
