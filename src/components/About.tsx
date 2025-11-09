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
            Hi, I'm Ahluma — a passionate developer and innovator who loves turning ideas into real, working applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I enjoy building systems that solve real-world problems, whether it's developing user-friendly web apps or creating machine learning models that make data meaningful.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, I love learning new tools, exploring design trends, and finding creative ways to improve my projects. I believe that great software isn't just about code — it's about impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
