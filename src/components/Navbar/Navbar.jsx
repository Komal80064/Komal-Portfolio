import { motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        animate={{
          backgroundColor: scrolled
            ? "rgba(9, 9, 11, 0.72)"
            : "rgba(0, 0, 0, 0)",
          borderColor: scrolled
            ? "rgba(63, 63, 70, 0.7)"
            : "rgba(0, 0, 0, 0)",
          boxShadow: scrolled
            ? "0 10px 40px rgba(0, 0, 0, 0.25)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-xl sm:px-6"
      >
        {/* =========================
            LOGO
        ========================== */}

        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-extrabold tracking-tight text-white"
        >
          Komal<span className="text-violet-400">.dev</span>
        </a>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-violet-400 hover:text-violet-300"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 transition hover:border-violet-400 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}

      <motion.div
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -10,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="mx-auto mt-2 max-w-7xl rounded-2xl border border-zinc-800 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col">
          <a
            href="#about"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            Contact
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-violet-400"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

