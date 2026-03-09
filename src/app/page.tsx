export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-14 px-5 py-14 sm:px-8 sm:py-20">
        <section id="hero" className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Jonathan Lopeti</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">Senior Full-Stack Engineer</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build production-ready software across frontend and backend systems, combining full-stack developer
            execution with engineering-level architectural thinking.
          </p>
        </section>

        <section id="about" className="space-y-3">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            I am a Senior Full-Stack Engineer focused on building internal products that improve operations,
            delivery speed, and platform reliability.
          </p>
        </section>

        <section id="skills" className="space-y-3">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
            <li>Frontend: React, Next.js, TypeScript</li>
            <li>Backend: Node.js, APIs, service integration</li>
            <li>Data: SQL, schema design, data workflows</li>
            <li>Platform: CI/CD, testing, cloud deployment</li>
          </ul>
        </section>

        <section id="experience" className="space-y-3">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Experience entries will list company, role, timeline, and quantified impact bullets.
          </p>
        </section>

        <section id="certs-awards" className="space-y-3">
          <h2 className="text-2xl font-semibold">Certs & Awards</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Add certifications, recognitions, or speaking achievements here.
          </p>
        </section>

        <section id="contact" className="space-y-3 pb-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Recruiter-friendly contact methods:
          </p>
          <ul className="space-y-1 text-muted-foreground">
            <li>Email: your-email@example.com</li>
            <li>LinkedIn: linkedin.com/in/your-handle</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
