// src/Portfolio.tsx
import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/25 via-sky-500/15 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-sky-500/15 via-blue-600/15 to-indigo-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-25" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-500 to-cyan-400 shadow-lg shadow-cyan-500/10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Oviemo Obukohwo</div>
              <div className="text-xs text-white/60"><p>Full-Stack Engineer (React + Node.js + TypeScript) | Web & App Developer | Passionate about Clean UI & AI powered solutions </p></div>
            </div>
          </div>

          <nav className="hidden items-center gap-3 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Hero */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Portfolio
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-wide sm:text-4xl ">
            Full-stack engineer building scalable,{" "}<br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
              production-ready web applications
            </span>
            .
          </h1>

          <p className="mt-3 max-w-2xl text-sm/7 leading-relaxed text-white/70">
           I specialize in building end-to-end web applications using modern JavaScript and backend technologies handling everything from UI/UX implementation to APIs, databases, authentication, and deployment. I focus on performance, clean architecture, and products that are ready for real users.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 hover:opacity-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
              <p className="mt-2 text-sm text-white/70">
                Each project is shown as a standalone build (not grouped as one).
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <ProjectCard
              title="Lead Capture Landing Page"
              subtitle="Conversion-focused lead gen page"
              bullets={[
                "Single CTA layout and trust stacking for clarity",
                "Validated form + premium full-screen success modal",
                "Mobile-first spacing and clean hierarchy",
              ]}
              tools="React, Tailwind CSS, Vite"
              role="Solo: UI build, responsiveness, form UX"
              ctaLabel="Open Page"
              ctaTo="https://landing-page-six-sigma-83.vercel.app/"
            />

            <ProjectCard
              title="Booking / Sales Funnel Page"
              subtitle="CTA-driven booking funnel"
              bullets={[
                "Problem → solution messaging structure",
                "Clear CTA path with in-page navigation",
                "Designed for fast scanning and mobile conversion",
              ]}
              tools="React, Tailwind CSS"
              role="Solo: layout, copy structure, CTA flow"
              ctaLabel="Open Page"
              ctaTo="https://landing-page-six-sigma-83.vercel.app/book"
            />

            <ProjectCard
              title="Portfolio Website"
              subtitle="Personal portfolio (this page)"
              bullets={[
                "Blue premium theme and clean section layout",
                "Project cards with tools + role details",
                "Fast, responsive, deploy-ready structure",
              ]}
              tools="React, Tailwind CSS, React Router"
              role="Solo: design system + routing"
              ctaLabel="Scroll to Contact"
              ctaHref="#contact"
            />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
            <p className="mt-2 text-sm text-white/70">
              Tools and strengths relevant to landing pages, funnels, and front-end development.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Pill>React</Pill>
              <Pill>Tailwind CSS</Pill>
              <Pill>Responsive UI</Pill>
              <Pill>Conversion-first layouts</Pill>
              <Pill>React Router</Pill>
              <Pill>Performance basics</Pill>
              <Pill>SEO fundamentals</Pill>
              <Pill>Clean component structure</Pill>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-sm text-white/70">
              Add your email/links here. Keep it simple for recruiters.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ContactRow label="Email" value="yourname@email.com" />
              <ContactRow label="LinkedIn" value="linkedin.com/in/your-handle" />
              <ContactRow label="GitHub" value="github.com/your-username" />
              <ContactRow label="Location" value="Nigeria (Remote-friendly)" />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:yourname@email.com"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 hover:opacity-95"
              >
                Email Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back to Projects
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Oviemo Obukohwo</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

function ProjectCard({
  title,
  subtitle,
  bullets,
  tools,
  role,
  ctaLabel,
  ctaTo,
  ctaHref,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  tools: string;
  role: string;
  ctaLabel: string;
  ctaTo?: string;
  ctaHref?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/60">{subtitle}</div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-5 space-y-1 text-xs text-white/60">
        <div>
          <span className="text-white/75">Tools:</span> {tools}
        </div>
        <div>
          <span className="text-white/75">Role:</span> {role}
        </div>
      </div>

      <div className="mt-6">
        {ctaTo ? (
          <Link
            to={ctaTo}
            className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 hover:opacity-95"
          >
            {ctaLabel}
          </Link>
        ) : (
          <a
            href={ctaHref}
            className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 hover:opacity-95"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
      {children}
    </div>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white/90">{value}</div>
    </div>
  );
}
