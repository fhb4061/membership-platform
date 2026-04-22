import type { Metadata } from "next";

import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { CertsAward } from "@/components/portfolio/certs-award";
import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Hero } from "@/components/portfolio/hero";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Jonathan Lopeti | Senior Full-Stack Engineer",
  description:
    "Portfolio of Jonathan Lopeti, a Senior Full-Stack Engineer and full-stack developer with 7+ years across banking and public-sector software.",
};

export default function Home() {

  return (
    <main>
      <div className="min-h-screen bg-transparent text-foreground">
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:w-[90vw] lg:max-w-none lg:grid-cols-[minmax(300px,360px)_1fr] lg:gap-20 lg:px-10 lg:pt-6 lg:pb-24">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Hero />
            <Separator />
            <Contact />
          </aside>

          <div className="space-y-14 lg:space-y-18">
            <About />
            <Skills />
            <Experience />
            <CertsAward />
          </div>
        </div>
      </div>
    </main>
  );
}
