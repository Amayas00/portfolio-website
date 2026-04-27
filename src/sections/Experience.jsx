const experiences = [
  {
    period: "2025 — 2026",
    role: "Licence 3 MIAGE",
    company: "Université Évry Paris-Saclay · Paris, France",
    description:
      "Formation en méthodes informatiques appliquées à la gestion des entreprises. Cours : SGBD, Réseaux, Modélisation Objet, JavaScript, Systèmes d'exploitation, Gestion de projets informatiques, Anglais professionnel. Moyenne sem. 1 : 14,58 / 20.",
    technologies: ["SGBD", "JavaScript", "Réseaux", "Gestion de projets"],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "L2 Informatique",
    company: "Université Évry Paris-Saclay · Paris, France",
    description:
      "Deuxième année de licence informatique avec mention Bien. Approfondissement en POO, programmation fonctionnelle, web dynamique, bases de données, statistiques, probabilités et réseaux.",
    technologies: ["POO", "Web dynamique", "Bases de données", "OCaml"],
    current: false,
  },
  {
    period: "2022 — 2024",
    role: "L1 & L2 Informatique",
    company: "Université Alger 1 · Alger, Algérie",
    description:
      "Deux premières années de licence en informatique avec mention Très Bien. Solides fondations en algorithmique, programmation orientée objet, mathématiques et logique.",
    technologies: ["C++", "Algorithmique", "Maths", "Java"],
    current: false,
  },
  {
    period: "2024",
    role: "Python for Data Science, AI & Development",
    company: "IBM via Coursera · Certification",
    description:
      "Initiation et pratique du langage Python pour la Data Science. Manipulation de données avec Pandas et Numpy, visualisation avec Matplotlib et introduction au machine learning et à l'intelligence artificielle.",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Machine Learning"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Formation & Certifications
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Un parcours qui{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              forge l'expertise.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Mon parcours académique, de mes premières années à Alger jusqu'à mon
            Master MIAGE à Paris-Saclay, avec une progression constante et des
            mentions honorifiques.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
