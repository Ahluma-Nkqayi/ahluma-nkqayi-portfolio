const Skills = () => {
  const skills = [
    "Machine Learning",
    "Project Management",
    "HTML",
    "Java",
    "CSS",
    "Time Management",
    "Python",
    "MySQL",
    "JavaScript",
    "Problem Solving"
  ];

  // Duplicate skills for seamless loop
  const allSkills = [...skills, ...skills];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4"
            >
              <div className="px-8 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-primary/20 hover:border-primary/60 hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground whitespace-nowrap">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
