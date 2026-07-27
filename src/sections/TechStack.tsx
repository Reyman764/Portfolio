import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

function TechStack() {
  const categories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "C", "C++", "C#"],
    },
    {
      title: "Frontend",
      skills: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "MySQL",
        "Supabase",
      ],
    },
    {
      title: "Tools & Design",
      skills: ["Git", "GitHub", "Figma"],
    },
  ];

  return (
    <>
      {" "}
      <section id="techstack">
        <div className="relative flex pt-14 pb-14 pr-16 pl-16 md:pr-28 md:pl-28 flex-col justify-between w-full gap-8 bg-zinc-900 border-t-2 border-b-2">
          <div className="flex flex-col items-baseline text-left md:items-start tracking-wide">
            <h2 className="text-1xl font-extralight text-primary-foreground">
              Technical Expertise
            </h2>
            <h1 className="text-4xl font-extrabold">Tech Stack</h1>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
                className="h-full w-full custom-card-motion-wrapper"
              >
                <Card className="border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-mono font-bold text-zinc-200 uppercase tracking-wider">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-sm font-mono text-zinc-300 bg-zinc-900/40 border border-zinc-900 px-3 py-1.5 rounded-md hover:border-zinc-800 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default TechStack;
