import { motion } from "motion/react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVite,
  SiMysql,
  SiPostman,
  SiVercel,
  SiFirebase,
} from "react-icons/si";
import { FaCss3Alt, FaNpm } from "react-icons/fa";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skills = [
  {
    title: "Frontend",
    description: "Building responsive and interactive interfaces.",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    description: "Creating APIs and server-side applications.",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    description: "Working with data and database-driven applications.",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools",
    description: "Tools I use throughout the development workflow.",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
      { name: "Postman", icon: SiPostman },
      { name: "NPM", icon: FaNpm },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-28">
        {/* =========================
            SECTION HEADER
        ========================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-sm">
              Skills
            </span>

            <span className="h-2 w-2 rounded-full bg-violet-400" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]"
          >
            Technologies I use
            <br />
            <span className="bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              to build for the web.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-[17px]"
          >
            A practical toolkit focused on building responsive interfaces,
            scalable applications and clean user experiences.
          </motion.p>
        </motion.div>

        {/* =========================
            SKILL GROUPS
        ========================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-colors duration-300 hover:border-violet-500/30"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                    {skill.description}
                  </p>
                </div>

                <span className="text-xs text-zinc-700">
                  0{skills.indexOf(skill) + 1}
                </span>
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {skill.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{
                        y: -2,
                        scale: 1.02,
                      }}
                      className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-black px-3 py-2 transition-colors duration-200 hover:border-violet-500/40"
                    >
                      <Icon
                        size={16}
                        className="text-zinc-400 transition-colors duration-200 group-hover:text-violet-400"
                      />

                      <span className="text-xs font-medium text-zinc-400">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
