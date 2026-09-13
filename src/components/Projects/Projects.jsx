import { motion } from "motion/react";
import {
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "TaskFlow",
    subtitle: "Full-Stack Task Management",
    description:
      "A modern task management app for organizing projects, tracking tasks, monitoring progress, and staying productive.",
    technologies: [
      "React",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    featured: true,
    status: "Featured Project",
    liveUrl: "https://taskflow-three-ashen-23.vercel.app/",
    githubUrl: "https://github.com/Komal80064/Taskflow",
    preview: "taskflow",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description:
      "A responsive portfolio built to showcase my skills, projects, and frontend development journey.",
    technologies: ["React", "Tailwind CSS", "Motion"],
    featured: false,
    status: "Personal Project",
    liveUrl: "#",
    githubUrl: "#",
    preview: "portfolio",
  },
  {
    title: "Weather App",
    subtitle: "Weather Information Application",
    description:
      "A responsive weather application using an external API to display real-time weather information.",
    technologies: ["React", "JavaScript", "API Integration"],
    featured: false,
    status: "API Project",
    liveUrl: "https://weather-app-gamma-ten-28.vercel.app/",
    githubUrl: "https://github.com/Komal80064/Weather-App.git",
    preview: "weather",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProjectPreview = ({ type }) => {
  if (type === "taskflow") {
    return (
      <div className="relative h-full min-h-52.5 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-transparent to-fuchsia-600/10" />

        <div className="relative mx-auto mt-6 w-[86%] overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-2xl">
          <div className="flex h-7 items-center gap-1.5 border-b border-zinc-800 px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          </div>

          <div className="grid grid-cols-[65px_1fr]">
            <div className="border-r border-zinc-800 p-2.5">
              <div className="mb-4 h-1.5 w-8 rounded bg-violet-400/70" />

              <div className="space-y-2.5">
                <div className="h-1.5 w-9 rounded bg-zinc-800" />
                <div className="h-1.5 w-8 rounded bg-zinc-800" />
                <div className="h-1.5 w-10 rounded bg-zinc-800" />
              </div>
            </div>

            <div className="p-3">
              <div className="mb-4 h-2.5 w-20 rounded bg-zinc-700" />

              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-12 rounded-md border border-zinc-800 bg-zinc-950" />
                <div className="h-12 rounded-md border border-zinc-800 bg-zinc-950" />
                <div className="h-12 rounded-md border border-zinc-800 bg-zinc-950" />
              </div>

              <div className="mt-2 h-16 rounded-md border border-zinc-800 bg-zinc-950" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "portfolio") {
    return (
      <div className="relative flex min-h-52.5 items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute h-40 w-40 rounded-full bg-violet-600/15 blur-[70px]" />

        <div className="relative text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            Developer
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Komal<span className="text-violet-400">.dev</span>
          </h3>

          <div className="mx-auto mt-4 h-px w-20 bg-linear-to-r from-transparent via-violet-400 to-transparent" />

          <p className="mt-3 text-xs text-zinc-500">
            Frontend Developer
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-52.5 items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/15 blur-[70px]" />

      <div className="relative w-[75%] rounded-xl border border-zinc-800 bg-black p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-1.5 w-14 rounded bg-zinc-700" />
            <div className="mt-2 h-1.5 w-20 rounded bg-zinc-800" />
          </div>

          <div className="h-8 w-8 rounded-full border border-violet-400/30 bg-violet-400/10" />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-3xl font-semibold text-white">28°</span>
            <p className="mt-1 text-[10px] text-zinc-500">
              Current Weather
            </p>
          </div>

          <div className="h-10 w-14 rounded-lg border border-zinc-800 bg-zinc-950" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">

        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-3 flex items-center justify-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              Projects
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
          >
            Things I’ve built
            <br />
            <span className="bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              with code and creativity.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-500 sm:text-base"
          >
            A selection of projects that showcase my approach to building
            responsive interfaces and practical applications.
          </motion.p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-4 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`group overflow-hidden rounded-2xl border bg-zinc-950/70 transition-colors duration-300 ${
                project.featured
                  ? "border-violet-500/30 lg:col-span-2"
                  : "border-zinc-800 hover:border-violet-500/30"
              }`}
            >
              <div
                className={
                  project.featured
                    ? "grid lg:grid-cols-[1.05fr_0.95fr]"
                    : ""
                }
              >
                {/* Preview */}
                <div
                  className={
                    project.featured
                      ? "order-2 lg:order-1"
                      : ""
                  }
                >
                  <ProjectPreview type={project.preview} />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-between p-5 sm:p-6 ${
                    project.featured
                      ? "order-1 lg:order-2"
                      : ""
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-1 text-[10px] font-medium text-violet-300">
                        {project.status}
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                      />
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-xs font-medium text-violet-400">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 max-w-xl text-xs leading-6 text-zinc-500 sm:text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-zinc-800 bg-black px-2.5 py-1 text-[10px] font-medium text-zinc-400 sm:text-xs"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-medium text-black transition hover:bg-violet-100"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3.5 py-2 text-xs font-medium text-white transition hover:border-violet-400 hover:text-violet-300"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-7 flex items-center justify-center gap-2 text-center text-[11px] text-zinc-600"
        >
          <CheckCircle2 size={13} className="text-violet-400" />
          <span>More projects will be added as I continue building.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
