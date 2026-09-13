import { motion } from "motion/react";
import { Code2, Sparkles, Rocket } from "lucide-react";
import profileImage from "../../assets/profile.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
        >
          {/* =========================
              LEFT — ONLY IMAGE
          ========================== */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Image Glow */}
              <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[80px]" />

              {/* Image */}
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl sm:h-80 sm:w-80 lg:h-88 lg:w-88">
                <img
                  src={profileImage}
                  alt="Komal Panwar"
                  className="h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* Decorative Border */}
              <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-2xl border border-violet-500/30" />
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT — ALL TEXT
          ========================== */}
          <motion.div
            variants={containerVariants}
            className="max-w-2xl"
          >
            {/* Small Label */}
            <motion.div
              variants={itemVariants}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-violet-400" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-sm">
                About Me
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]"
            >
              Building clean,
              <br />
              <span className="bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                meaningful experiences.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-[17px]"
            >
              I'm{" "}
              <span className="font-medium text-zinc-200">
                Komal Panwar
              </span>
              , a BTech IT student and frontend-focused developer passionate
              about creating modern and responsive web experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-base leading-7 text-zinc-500 sm:text-[17px]"
            >
              I enjoy working with React and JavaScript to turn ideas into
              clean, intuitive interfaces while continuously improving my
              development skills.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap gap-3"
            >
              {/* Clean Code */}
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5">
                <Code2 size={16} className="text-violet-400" />

                <span className="text-xs text-zinc-400">
                  Clean Code
                </span>
              </div>

              {/* UI Focused */}
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5">
                <Sparkles size={16} className="text-violet-400" />

                <span className="text-xs text-zinc-400">
                  UI Focused
                </span>
              </div>

              {/* Always Learning */}
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5">
                <Rocket size={16} className="text-violet-400" />

                <span className="text-xs text-zinc-400">
                  Always Learning
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

