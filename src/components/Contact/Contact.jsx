import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import {
  Mail,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_pn5pzyd",
        "template_67anzh8",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Oa-S880auyKrAhCx2"
      );

      setStatus("Thanks! Your message has been sent.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Status:", error.status);
      console.error("Text:", error.text);
      console.error("EmailJS Error:", error);

      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px] sm:top-20 sm:h-80 sm:w-80 sm:blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-10"
        >
          <div className="mb-3 flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
              Contact
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Let's build something
            <br />
            <span className="bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              meaningful together.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md px-2 text-xs leading-6 text-zinc-500 sm:mt-4 sm:px-0 sm:text-base">
            Have a project, opportunity, or just want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="grid min-w-0 gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-5">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6 lg:p-7"
          >
            <h3 className="text-lg font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-3 text-xs leading-6 text-zinc-500 sm:text-sm">
              I'm currently open to frontend development opportunities,
              internships, collaborations, and interesting projects.
            </p>

            {/* Email */}
            <a
              href="mailto:panwarkomal2003@gmail.com"
              className="group mt-6 flex min-w-0 items-center gap-3 rounded-xl border border-zinc-800 bg-black p-3.5 transition hover:border-violet-500/30 sm:mt-7 sm:gap-4 sm:p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 sm:h-10 sm:w-10">
                <Mail size={17} className="text-violet-400 sm:size-4.5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-zinc-600 sm:text-xs">
                  Email
                </p>

                <p className="mt-1 truncate text-xs text-zinc-300 sm:text-sm">
                  panwarkomal2003@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={15}
                className="shrink-0 text-zinc-600 transition group-hover:text-violet-400"
              />
            </a>

            {/* Social links */}
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">
              <a
                href="https://github.com/Komal80064"
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center justify-center gap-1.5 rounded-xl border border-zinc-800 bg-black px-3 py-2.5 text-xs text-zinc-400 transition hover:border-violet-500/30 hover:text-white sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
              >
                <FaGithub size={16} className="shrink-0 sm:size-4.25" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/komal-panwar800"
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center justify-center gap-1.5 rounded-xl border border-zinc-800 bg-black px-3 py-2.5 text-xs text-zinc-400 transition hover:border-violet-500/30 hover:text-white sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
              >
                <FaLinkedin size={16} className="shrink-0 sm:size-4.25" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6 lg:p-7"
          >
            {/* Name + Email */}
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">

              {/* Name */}
              <div className="min-w-0">
                <label className="mb-2 block text-[11px] font-medium text-zinc-400 sm:text-xs">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="box-border w-full min-w-0 rounded-xl border border-zinc-800 bg-black px-3.5 py-3 text-xs text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-500/50 sm:px-4 sm:text-sm"
                />
              </div>

              {/* Email */}
              <div className="min-w-0">
                <label className="mb-2 block text-[11px] font-medium text-zinc-400 sm:text-xs">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="box-border w-full min-w-0 rounded-xl border border-zinc-800 bg-black px-3.5 py-3 text-xs text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-500/50 sm:px-4 sm:text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-4 sm:mt-5">
              <label className="mb-2 block text-[11px] font-medium text-zinc-400 sm:text-xs">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={5}
                className="box-border w-full min-w-0 resize-none rounded-xl border border-zinc-800 bg-black px-3.5 py-3 text-xs text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-500/50 sm:px-4 sm:text-sm"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-black transition hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-5 sm:text-sm"
            >
              <Send size={15} />

              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="mt-3 text-center text-[11px] leading-5 text-violet-400 sm:text-xs">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

