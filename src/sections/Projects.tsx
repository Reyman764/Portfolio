import ProjectCard from "@/components/projectCard";
import { motion } from "framer-motion";

import jwrThumbnail from "@/assets/projects/jungle-world-resort.png";
import stockThumbnail from "@/assets/projects/stock-tracker.svg";

interface ProjectCardProps {
  title: string;
  year: number;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

const projectList: ProjectCardProps[] = [
  {
    title: "Jungle World Resort — Chitwan",
    year: 2026,
    description:
      "A full-stack booking platform for a resort in Chitwan, featuring an admin dashboard with trend charts, staff authentication, and secure booking workflows. Built during my internship at Prabhu Group, with performance and security hardening throughout.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    imageUrl: jwrThumbnail,
    projectUrl: "https://github.com/Reyman764/Jungle_world_resort-Chitwan",
  },
  {
    title: "Stock Tracker",
    year: 2026,
    description:
      "A mobile-friendly inventory tracker for Samsung products that logs stock quantities and keeps a 7-day history — works fully offline after the first visit, with no backend required.",
    techStack: ["React", "JavaScript", "Service Worker", "Vercel"],
    imageUrl: stockThumbnail,
    projectUrl: "https://stock-tracker-bay-rho.vercel.app",
    githubUrl: "https://github.com/Reyman764/Stock-Tracker",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Projects() {
  return (
    <>
      <section id="projects">
        <div className="relative pt-12 pb-12 pr-6 pl-6 md:pr-24 md:pl-24 w-full">
          <div className="container flex flex-col items-center mx-auto">
            <h2 className="text-4xl font-extrabold text-center">Projects</h2>
            <p className="text-sm text-zinc-400 font-mono mt-3 text-center max-w-md">
              A couple of things I've built recently — more on the way.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full mt-10"
            >
              {projectList.map((value, index) => (
                <ProjectCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  year={value.year}
                  techStack={value.techStack}
                  imageUrl={value.imageUrl}
                  projectUrl={value.projectUrl}
                  githubUrl={value.githubUrl}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
