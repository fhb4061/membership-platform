import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Award, BriefcaseBusiness, House, Mail, UserRound, Wrench } from "lucide-react";

import type { PortfolioSectionId } from "@/app/portfolio-data";
import { portfolioContent } from "@/app/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Jonathan Lopeti | Senior Full-Stack Engineer",
  description:
    "Portfolio of Jonathan Lopeti, a Senior Full-Stack Engineer and full-stack developer with 7+ years across banking and public-sector software.",
};

type NavSectionId = PortfolioSectionId | "hero";

const navIconMap: Record<NavSectionId, LucideIcon> = {
  hero: House,
  about: UserRound,
  skills: Wrench,
  experience: BriefcaseBusiness,
  "certs-awards": Award,
  contact: Mail,
};

export default function Home() {
  const desktopNavItems = portfolioContent.navItems.filter((item) => item.id !== "contact");

  const mobileNavItems: { id: NavSectionId; label: string }[] = [
    { id: "hero", label: "Hero" },
    { id: "contact", label: "Contact" },
    ...desktopNavItems,
  ];

  const renderNavItems = (items: { id: NavSectionId; label: string }[], showLabel: boolean, keyPrefix: string) =>
    items.map((item) => {
      const Icon = navIconMap[item.id];

      return (
        <NavigationMenuItem key={`${keyPrefix}-${item.id}`}>
          <Button
            asChild
            variant="outline"
            size={showLabel ? "sm" : "icon-sm"}
            className="rounded-full border-border/70 bg-transparent text-muted-foreground shadow-none hover:bg-accent/30 hover:text-foreground"
          >
            <a href={`#${item.id}`} aria-label={item.label} title={item.label}>
              <Icon className="size-4" />
              {showLabel ? item.label : null}
            </a>
          </Button>
        </NavigationMenuItem>
      );
    });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-10 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:w-[90vw] lg:max-w-none lg:px-10">
          <div className="flex justify-center py-2 sm:hidden">
            <NavigationMenu aria-label="Section navigation" viewport={false}>
              <NavigationMenuList className="gap-2">{renderNavItems(mobileNavItems, false, "mobile")}</NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden justify-center py-3 sm:flex">
            <NavigationMenu aria-label="Section navigation" viewport={false}>
              <NavigationMenuList className="gap-2 text-sm">{renderNavItems(desktopNavItems, true, "desktop")}</NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:w-[90vw] lg:max-w-none lg:grid-cols-[minmax(300px,380px)_1fr] lg:gap-20 lg:px-10 lg:py-24">
        <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start">
          <section id="hero" className="space-y-5 scroll-mt-20">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">{portfolioContent.name}</p>
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">{portfolioContent.headline}</h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{portfolioContent.heroSummary}</p>
            <Badge variant="outline" className="rounded-full px-3 py-1 text-xs text-muted-foreground">
              Objective: {portfolioContent.objective}
            </Badge>
          </section>

          <section id="contact" className="space-y-3 scroll-mt-20">
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
        </aside>

        <div className="space-y-14 lg:space-y-16">
          <section id="about" className="space-y-3 scroll-mt-20">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="max-w-4xl text-base leading-relaxed text-muted-foreground">{portfolioContent.about}</p>
          </section>

          <section id="skills" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="overflow-hidden rounded-xl border border-border/70">
              {portfolioContent.skills.map((group, index) => (
                <div key={group.title}>
                  {index > 0 && <Separator className="bg-border/60" />}
                  <article className="grid gap-2 p-4 sm:grid-cols-[170px_1fr] sm:items-start">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{group.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{group.items.join(", ")}</p>
                  </article>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="space-y-6">
              {portfolioContent.experiences.map((experience) => (
                <Card key={`${experience.company}-${experience.period}`} className="gap-0 border-border/70 bg-card/30 py-0">
                  <CardHeader className="gap-1 px-5 py-5">
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">{experience.period}</p>
                    <CardTitle className="text-xl">{experience.role}</CardTitle>
                    <p className="text-base font-normal text-muted-foreground">{experience.company}</p>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <ul className="space-y-3">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet} className="relative pl-4">
                          <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-primary/65" />
                          <span className="relative text-sm leading-relaxed text-muted-foreground sm:text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="certs-awards" className="space-y-5 scroll-mt-20">
            <h2 className="text-2xl font-semibold">Certs & Awards</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="gap-3 border-border/70 bg-card/30 py-5">
                <CardHeader className="px-5 pb-0">
                  <CardTitle className="text-lg">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="px-5">
                  <ul className="space-y-1 text-muted-foreground">
                    {portfolioContent.certifications.map((certification) => (
                      <li key={certification.name}>{certification.name}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="gap-3 border-border/70 bg-card/30 py-5">
                <CardHeader className="px-5 pb-0">
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent className="px-5">
                  <p className="font-medium">{portfolioContent.education.institution}</p>
                  <p className="text-sm text-muted-foreground">{portfolioContent.education.period}</p>
                  <p className="mt-2 text-muted-foreground">{portfolioContent.education.degree}</p>
                  <p className="text-sm text-muted-foreground">Major: {portfolioContent.education.major}</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
