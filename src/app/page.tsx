import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Typewriter from "@/components/Typewriter";
import BackToTop from "@/components/BackToTop";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Research-RAGbot",
    description:
      "A local, GPU-accelerated RAG research assistant. Upload papers and ask questions — everything runs 100% on-device via Ollama with streaming answers and source citations.",
    tech: ["Python", "Ollama", "ChromaDB", "Streamlit"],
    github: "https://github.com/KNKDarK/Research-RAGbot",
  },
  {
    title: "Network Anomaly Detection",
    description:
      "A machine-learning intrusion detection system that classifies network traffic into attack types using Random Forest, XGBoost, and LSTM, with SHAP explainability and a Streamlit dashboard.",
    tech: ["Python", "scikit-learn", "XGBoost", "TensorFlow"],
    github: "https://github.com/KNKDarK/Network-Anomaly-Detection",
  },
  {
    title: "My Project for Web",
    description:
      "A production-ready Next.js scaffold with App Router, TypeScript, Tailwind, shadcn/ui components, Prisma, and NextAuth — designed for fast, type-safe web development.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    github: "https://github.com/KNKDarK/my_project-for-web",
    demo: "https://my-project-for-web.vercel.app",
  },
];

export default function Home() {
  return (
    <>
    <Navbar />
    <BackToTop />
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-[10%] top-1/4 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-[20%] bottom-20 h-40 w-40 rounded-full bg-emerald-600/20 blur-2xl" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-24 h-3 w-3 rounded-full bg-emerald-400/60" />
        <div className="absolute left-[22%] top-1/2 h-2 w-2 rounded-full bg-teal-400/50" />
        <div className="absolute right-[15%] top-32 h-3 w-3 rounded-full bg-emerald-400/50" />
        <div className="absolute bottom-24 left-1/2 h-2 w-2 rounded-full bg-emerald-500/70" />
        <div className="absolute bottom-1/3 right-[25%] h-2.5 w-2.5 rounded-full bg-teal-500/40" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid"
      ></div>

      <Reveal>
      <div className="flex max-w-2xl flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to internships &amp; opportunities
        </span>

        <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Sk. Shafi Masthan Koushik
          </span>
        </h1>

        <p className="text-lg leading-8 text-slate-400 sm:text-xl">
          <Typewriter />
        </p>

        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 text-sm font-semibold text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 px-6 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <a
            href="mailto:knkssmk@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-1.5 text-sm text-slate-400 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
          >
            <span aria-hidden="true">📧</span>
            knkssmk@gmail.com
          </a>
          <a
            href="tel:+918142726417"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-1.5 text-sm text-slate-400 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
          >
            <span aria-hidden="true">📱</span>
            +91 8142726417
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-1.5 text-sm text-slate-400">
            <span aria-hidden="true">📍</span>
            Hyderabad, India
          </span>
        </div>
      </div>
      </Reveal>

      <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800/60">
        {[
          { icon: "💻", value: "3+", label: "Projects Built" },
          { icon: "📝", value: "Open", label: "Source Contributor" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 bg-slate-950/80 px-2 py-5 text-center sm:px-4">
            <span className="text-xl" aria-hidden="true">{stat.icon}</span>
            <span className="font-display text-lg font-semibold text-emerald-400 sm:text-xl">
              {stat.value}
            </span>
            <span className="text-[11px] leading-tight text-slate-400 sm:text-xs">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>

    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-32">
      <Reveal>
      <div className="flex items-center gap-4">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-100">
          About Me
        </h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[auto_1fr]">

        <div className="mx-auto lg:mx-0">
          <div className="rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-1 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.45)]">
            <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-slate-900 text-6xl font-semibold text-emerald-400 sm:h-56 sm:w-56">
              SK
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4 text-lg leading-loose tracking-wide text-slate-400">
            <p>
              I&apos;m a B.Tech Computer Science student passionate about building
              efficient and scalable software. My interests revolve around{" "}
              <span className="text-emerald-400">Data Structures &amp; Algorithms</span>{" "}
              and{" "}
              <span className="text-emerald-400">Web Development</span>, where I enjoy
              turning complex problems into clean, practical solutions.
            </p>
            <p>
              When I&apos;m not studying, you&apos;ll find me honing my craft through personal
              projects, participating in coding challenges, and exploring new
              technologies to stay ahead of the curve.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Location</p>
              <p className="mt-1 text-sm text-slate-200">📍 Hyderabad</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">College</p>
              <p className="mt-1 text-sm text-slate-200">🎓 GITAM</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Focus</p>
              <p className="mt-1 text-sm text-slate-200">🎯 DSA &amp; Web Dev</p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      <div id="skills" className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Technical Skills
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Java", "Python", "C++", "React", "Node.js", "MySQL"].map(
              (skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
                >
                  {skill}
                </span>
              )
            )}
        </div>
      </div>
      </Reveal>
    </section>

    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-32">
      <Reveal>
      <div className="flex items-center gap-4">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-100">
          Projects
        </h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100}>
          <article
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-slate-900 hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.35)]"
          >
            <div className="relative aspect-video overflow-hidden border-b border-slate-800">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/25 via-slate-900 to-slate-950 transition-transform duration-500 group-hover:scale-105">
                <div className="flex flex-col items-center gap-3 px-4 text-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span className="text-sm font-medium text-slate-300">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-semibold text-slate-100 transition-colors duration-300 group-hover:text-emerald-400">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 text-sm font-medium">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/view inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-emerald-400"
              >
                View Code
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-translate-x-1 opacity-0 transition-all duration-300 group-hover/view:translate-x-0 group-hover/view:opacity-100"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/view inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-emerald-400"
                >
                  Live Demo
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="-translate-x-1 opacity-0 transition-all duration-300 group-hover/view:translate-x-0 group-hover/view:opacity-100"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
              )}
            </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
      </Reveal>
    </section>

    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-32">
      <Reveal>
      <div className="flex items-center gap-4">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-100">
          Contact Me
        </h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <div className="mt-12 flex flex-col items-center gap-8 text-center">
        <p className="max-w-lg text-lg text-slate-400">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach
          out.
        </p>

        <a
          href="mailto:knkssmk@gmail.com"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-500 px-8 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Email Me
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/KNKDarK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.75 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/shafi-masthan-koushik-shaik-b79ba7356/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
      </div>
      </Reveal>
    </section>

    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center">
        <p className="text-sm text-slate-400">
          Built with <span className="text-emerald-400">Next.js</span> &amp;{" "}
          <span className="text-emerald-400">Tailwind</span> by{" "}
          <span className="font-semibold text-slate-200">SK.SHAFI MASTHAN KOUSHIK</span>
        </p>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 text-xs font-bold text-emerald-400">
            SSMK
          </span>
          <span>© {new Date().getFullYear()} SSMK Portfolio</span>
        </div>
      </div>
    </footer>
    </>
  );
}
