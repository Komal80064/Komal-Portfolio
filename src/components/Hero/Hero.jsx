import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaSquareGithub } from "react-icons/fa6";

const roles = [
  "Frontend Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* =========================
          BACKGROUND GLOWS
      ========================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/5 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/5 blur-[120px]"
      />

      {/* =========================
          HERO CONTENT
      ========================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-32 text-center sm:px-8"
      >
        {/* Small Label */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-violet-400" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            Welcome to my portfolio
          </span>

          <span className="h-2 w-2 rounded-full bg-violet-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="block text-white">Hi, I'm</span>

          <span
            className="mt-2 block bg-linear-to-r
            from-violet-400 via-purple-400 to-fuchsia-400
            bg-clip-text text-transparent"
          >
            Komal Panwar
          </span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          variants={itemVariants}
          className="relative mt-7 h-10 w-full overflow-hidden sm:h-12"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[roleIndex]}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-0 text-2xl font-semibold text-zinc-200 sm:text-3xl"
            >
              {roles[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-[17px]"
        >
          I build modern, responsive and user-focused web applications
          using React, JavaScript and modern web technologies. I enjoy
          turning ideas into clean and engaging digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="group flex w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-violet-400"
          >
            View Projects

            <motion.span
              whileHover={{
                x: 3,
                y: -3,
              }}
            >
              <ArrowUpRight size={17} />
            </motion.span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex w-fit items-center justify-center rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-violet-400 hover:text-violet-300"
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* =========================
            SOCIAL LINKS
        ========================== */}

        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center gap-3"
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/Komal80064"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-colors hover:border-violet-500/50 hover:text-white"
            aria-label="GitHub"
          >
            <FaSquareGithub size={25} />
          </motion.a>

          {/* Gmail */}
          <motion.a
            href="mailto:panwarkomal2003@gmail.com"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-colors hover:border-violet-500/50 hover:text-white"
            aria-label="Email"
          >
            <Mail size={19} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/komal-panwar800"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-colors hover:border-violet-500/50 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </motion.a>
        </motion.div>

        {/* Bottom Tech Line */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
        >
          <span className="text-xs text-zinc-600">
            React
          </span>

          <span className="text-zinc-800">•</span>

          <span className="text-xs text-zinc-600">
            JavaScript
          </span>

          <span className="text-zinc-800">•</span>

          <span className="text-xs text-zinc-600">
            Node.js
          </span>

          <span className="text-zinc-800">•</span>

          <span className="text-xs text-zinc-600">
            MongoDB
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

