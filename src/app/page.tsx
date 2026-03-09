import type { Metadata } from "next";

import { portfolioContent } from "@/app/portfolio-data";

export const metadata: Metadata = {
  title: "Jonathan Lopeti | Senior Full-Stack Engineer",
  description:
    "Portfolio of Jonathan Lopeti, a Senior Full-Stack Engineer and full-stack developer with 7+ years across banking and public-sector software.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-10 border-b border-border/60 bg-background/90 backdrop-blur">
        <nav aria-label="Section navigation" className="mx-auto w-full max-w-5xl overflow-x-auto px-5 sm:px-8">
          <ul className="flex min-w-max items-center gap-2 py-3 text-sm">
            {portfolioContent.navItems.map((item) => (
              <li key={item.id}>
                <a
                  className="rounded-full border border-border/70 px-3 py-1.5 text-muted-foreground transition hover:text-foreground"
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-5 py-14 sm:px-8 sm:py-20">
        <section id="hero" className="space-y-5 scroll-mt-20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">{portfolioContent.name}</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">{portfolioContent.headline}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {portfolioContent.heroSummary}
          </p>
          <p className="text-sm font-medium text-muted-foreground">Objective: {portfolioContent.objective}</p>
        </section>

        <section id="about" className="space-y-3 scroll-mt-20">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="max-w-4xl text-base leading-relaxed text-muted-foreground">{portfolioContent.about}</p>
        </section>

        <section id="skills" className="space-y-6 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="divide-y divide-border/60 rounded-xl border border-border/70">
            {portfolioContent.skills.map((group) => (
              <article key={group.title} className="grid gap-2 p-4 sm:grid-cols-[170px_1fr] sm:items-start">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{group.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{group.items.join(", ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="space-y-6">
            {portfolioContent.experiences.map((experience) => (
              <article key={`${experience.company}-${experience.period}`} className="rounded-xl border border-border/70 bg-card/30 p-5">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{experience.period}</p>
                <h3 className="mt-1 text-xl font-semibold">{experience.role}</h3>
                <p className="text-base text-muted-foreground">{experience.company}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="certs-awards" className="space-y-5 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Certs & Awards</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-xl border border-border/70 bg-card/30 p-5">
              <h3 className="mb-3 text-lg font-medium">Certifications</h3>
              <ul className="space-y-1 text-muted-foreground">
                {portfolioContent.certifications.map((certification) => (
                  <li key={certification.name}>{certification.name}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border border-border/70 bg-card/30 p-5">
              <h3 className="mb-3 text-lg font-medium">Education</h3>
              <p className="font-medium">{portfolioContent.education.institution}</p>
              <p className="text-sm text-muted-foreground">{portfolioContent.education.period}</p>
              <p className="mt-2 text-muted-foreground">{portfolioContent.education.degree}</p>
              <p className="text-sm text-muted-foreground">Major: {portfolioContent.education.major}</p>
            </article>
          </div>
        </section>

        <section id="contact" className="space-y-3 pb-6 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-base leading-relaxed text-muted-foreground">Recruiter-friendly contact methods:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              Email:{" "}
              <a className="underline underline-offset-4 hover:text-foreground" href={`mailto:${portfolioContent.contact.email}`}>
                {portfolioContent.contact.email}
              </a>
            </li>
            <li>Phone: {portfolioContent.contact.phone}</li>
            <li>
              LinkedIn:{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href={portfolioContent.contact.linkedinUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {portfolioContent.contact.linkedinLabel}
              </a>
            </li>
            <li>Location: {portfolioContent.contact.location}</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
