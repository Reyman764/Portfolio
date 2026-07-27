import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface JourneyItem {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  badgeText?: string;
  isHighlight?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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

export default function Journey() {
  const journey: JourneyItem[] = [
    {
      year: "2026",
      title: "Software Development Intern",
      subtitle: "Prabhu Group (Sunrise Holdings)",
      description:
        "Built a full-stack resort booking management system using React, Node.js/Express, and Supabase — including the admin dashboard, booking workflows, and staff authentication. Also contributed to KaryaSync, a role-based task management SaaS platform, building its DRBAC admin panel and leading a UI overhaul with Framer Motion and Tailwind.",
      badgeText: "Internship",
      isHighlight: true,
    },
    {
      year: "Expected 2026",
      title: "BSc. CSIT",
      subtitle: "Nagarjuna College of IT, Tribhuvan University",
      description:
        "Pursuing a Bachelor's degree in Computer Science and Information Technology, TU-affiliated — building a foundation in software engineering, systems, and web development alongside hands-on project work.",
      badgeText: "In Progress",
    },
    {
      year: "2022",
      title: "Completed Studies at Prasadi Academy",
      subtitle: "Tribhuvan University (TU) Affiliated",
      description:
        "Completed studies at Prasadi Academy before moving on to a Computer Science and IT-focused Bachelor's degree.",
      badgeText: "Graduated",
    },
  ];

  return (
    <>
      <section
        id="journey"
        className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-2 mb-10">
            <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
              Timeline & History
            </h2>
            <h1 className="text-3xl font-bold text-zinc-100">My Journey</h1>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l border-zinc-900 ml-4 mt-6 space-y-8"
          >
            {journey.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.015, x: 4 }}
                transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
                className="relative pl-8 group cursor-pointer"
              >
                <div
                  className={`absolute -left-2.25 top-1.5 h-4 w-4 rounded-full border-4 transition-colors duration-300
                  ${
                    item.isHighlight
                      ? "bg-amber-400 border-zinc-950 group-hover:bg-amber-300"
                      : "bg-zinc-800 border-zinc-950 group-hover:bg-primary"
                  }`}
                />

                <Card
                  className={`border bg-zinc-950/50 transition-all duration-300
                  ${
                    item.isHighlight
                      ? "border-amber-900/40 bg-amber-950/5 hover:border-amber-800/60"
                      : "border-zinc-900 hover:border-zinc-800"
                  }`}
                >
                  <CardContent className="p-5 font-mono">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-sm font-bold ${item.isHighlight ? "text-amber-400" : "text-zinc-500"}`}
                      >
                        {item.year}
                      </span>
                      {item.badgeText && (
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border 
                          ${
                            item.isHighlight
                              ? "bg-amber-900/30 text-amber-300 border-amber-800/50"
                              : "bg-zinc-900 text-zinc-400 border-zinc-800"
                          }`}
                        >
                          {item.badgeText}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`text-lg font-bold ${item.isHighlight ? "text-amber-100" : "text-zinc-200"}`}
                    >
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-xs text-zinc-500 mt-0.5">{item.subtitle}</p>
                    )}

                    <p className="text-xs text-zinc-405 mt-3 leading-relaxed">
                      {item.description}
                    </p>
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
