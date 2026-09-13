import { motion } from "motion/react";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-black">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 sm:py-12 lg:px-8">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-extrabold tracking-tight text-white"
            >
              Komal<span className="text-violet-400">.dev</span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
              Frontend developer focused on building clean, responsive and
              meaningful web experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#about"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Contact
            </a>
          </nav>
        </motion.div>

        {/* Divider */}
        <div className="my-8 h-px bg-zinc-900" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-zinc-600">
            © {currentYear} Komal Panwar. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Komal80064"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition hover:border-violet-500/30 hover:text-white"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://linkedin.com/in/komal-panwar800"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition hover:border-violet-500/30 hover:text-white"
            >
              <FaLinkedin size={16} />
            </a>

            <a
              href="mailto:panwarkomal2003@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition hover:border-violet-500/30 hover:text-white"
            >
              <Mail size={16} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black transition hover:bg-violet-100"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

