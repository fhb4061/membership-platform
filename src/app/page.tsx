import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonathan Lopeti | Senior Full-Stack Engineer",
  description:
    "Portfolio of Jonathan Lopeti, a Senior Full-Stack Engineer and full-stack developer building reliable web software.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Jonathan Lopeti
        </p>
        <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">
          Senior Full-Stack Engineer
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build production-ready software across frontend and backend systems. I am a full-stack
          developer with engineering depth in architecture, scalability, and delivery.
        </p>
      </section>
    </main>
  );
}
