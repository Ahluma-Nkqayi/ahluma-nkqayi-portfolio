const Skills = () => {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Python",
    "MySQL",
    "Machine Learning"
  ];

  const softSkills = [
    "Project Management",
    "Time Management",
    "Problem Solving",
    "Communication",
    "Teamwork"
  ];

  // Duplicate for seamless scroll
  const allTechnical = [...technicalSkills, ...technicalSkills];
  const allSoft = [...softSkills, ...softSkills];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-12">
        <h3 className="text-center font-display text-2xl font-semibold text-foreground mb-6">
          Technical Skills
        </h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {allTechnical.map((skill, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <div className="px-8 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-primary/20 hover:border-primary/60 hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                  <span className="text-lg font-semibold text-foreground whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-center font-display text-2xl font-semibold text-foreground mb-6">
          Soft Skills
        </h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:[animation-play-state:paused]" style={{ animationDirection: "reverse" }}>
            {allSoft.map((skill, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <div className="px-8 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-accent/20 hover:border-accent/60 hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                  <span className="text-lg font-semibold text-foreground whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
