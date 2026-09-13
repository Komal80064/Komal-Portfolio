import { motion } from "motion/react";
import { GraduationCap, BookOpen, ArrowUpRight } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "G. B. Pant University of Agriculture & Technology",
    period: "2024 – Present",
    description:
      "Currently pursuing a Bachelor's degree in Information Technology, building a strong foundation in software development, web technologies, and problem solving.",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Govt. Polytechnic Srinagar Garhwal",
    period: "Completed (2021-2024)",
    description:
      "Completed diploma studies with a foundation in technical concepts and computer-related skills.",
    icon: BookOpen,
    current: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-24 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 sm:py-20 lg:py-24">

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
              Education
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            My academic
            <span className="bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}journey.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-500 sm:text-base"
          >
            The academic foundation behind my journey into software and web
            development.
          </motion.p>
        </motion.div>

        {/* Education timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute bottom-8 left-4.75 top-8 w-px bg-zinc-800 sm:left-5.75" />

          <div className="space-y-5">
            {education.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.degree}
                  variants={itemVariants}
                  className="relative flex gap-5 sm:gap-7"
                >
                  {/* Timeline icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-black sm:h-12 sm:w-12">
                    <Icon
                      size={18}
                      className="text-violet-400 sm:h-5 sm:w-5"
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="group flex-1 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition-colors duration-300 hover:border-violet-500/30 sm:p-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-white">
                            {item.degree}
                          </h3>

                          {item.current && (
                            <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-2 py-0.5 text-[10px] font-medium text-violet-300">
                              Current
                            </span>
                          )}
                        </div>

                        <p className="mt-1.5 text-sm text-violet-400">
                          {item.institution}
                        </p>
                      </div>

                      <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                        {item.period}
                        <ArrowUpRight
                          size={13}
                          className="text-zinc-700 transition-colors group-hover:text-violet-400"
                        />
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

