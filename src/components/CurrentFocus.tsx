import { GraduationCap, Briefcase, Wrench, Search } from "lucide-react";

const CurrentFocus = () => {
  const focusItems = [
    {
      icon: GraduationCap,
      text: "Diploma in Applications Development – Completed",
      color: "primary"
    },
    {
      icon: Briefcase,
      text: "Data Analysis Associate – CAPACITI",
      color: "secondary"
    },
    {
      icon: Wrench,
      text: "SQL, Python, Power BI, Web Development, Git",
      color: "accent"
    },
    {
      icon: Search,
      text: "Actively seeking Junior Software Developer / Data Analyst roles",
      color: "primary"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8 animate-fade-in">
            Current Focus
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/40 hover:shadow-soft transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-2.5 bg-${item.color}/10 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 text-${item.color}`} />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
