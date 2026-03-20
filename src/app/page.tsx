import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BriefcaseBusiness,
  Bug,
  Cpu,
  Database,
  House,
  Mail,
  MapPin,
  Phone,
  UserRound,
  Wrench,
} from "lucide-react";

import type { PortfolioSectionId } from "@/app/portfolio-data";
import { portfolioContent } from "@/app/portfolio-data";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
            className="portfolio-nav-button"
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
    <main className="portfolio-shell">
      <div className="portfolio-nav-shell sticky top-0 z-10 border-b">
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

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:w-[90vw] lg:max-w-none lg:grid-cols-[minmax(300px,360px)_1fr] lg:gap-20 lg:px-10 lg:pt-6 lg:pb-24">
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <section id="hero" className="space-y-4 scroll-mt-20">
            <Badge variant="outline" className="portfolio-hero-badge">
              {portfolioContent.name}
            </Badge>
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl lg:text-[2.85rem] lg:leading-[1.05]">
              {portfolioContent.headline}
            </h1>
          </section>

          <section id="contact" className="scroll-mt-20 space-y-4 border-t border-border/70 pt-5">
            <h2 className="text-xl font-semibold">Contact</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="portfolio-icon mt-0.5 size-4" />
                <a className="underline underline-offset-4 hover:text-foreground" href={`mailto:${portfolioContent.contact.email}`}>
                  {portfolioContent.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="portfolio-icon mt-0.5 size-4" />
                <span>{portfolioContent.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <UserRound className="portfolio-icon mt-0.5 size-4" />
                <a
                  className="underline underline-offset-4 hover:text-foreground"
                  href={portfolioContent.contact.linkedinUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {portfolioContent.contact.linkedinLabel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="portfolio-icon mt-0.5 size-4" />
                <span>{portfolioContent.contact.location}</span>
              </li>
            </ul>
          </section>
        </aside>

        <div className="space-y-14 lg:space-y-[4.5rem] lg:pt-2">
          <section id="about" className="space-y-3 scroll-mt-20">
            <div className="space-y-4">
              <span
                className={cn(
                  badgeVariants({ variant: "outline" }),
                  "portfolio-section-badge"
                )}
              >
                About
              </span>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Building reliable software with product empathy and engineering depth.
              </h2>
              <p className="max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">{portfolioContent.about}</p>
            </div>
          </section>

          <section id="skills" className="space-y-6 scroll-mt-20">
            <div className="flex items-center gap-3">
              <Database className="portfolio-icon size-5" />
              <h2 className="text-2xl font-semibold">Skills</h2>
            </div>
            <div className="portfolio-soft-panel">
              {portfolioContent.skills.map((group, index) => (
                <div key={group.title}>
                  {index > 0 && <Separator className="portfolio-divider" />}
                  <article className="grid gap-2 p-4 sm:grid-cols-[170px_1fr] sm:items-start">
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-muted-foreground">{group.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{group.items.join(", ")}</p>
                  </article>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="space-y-6 scroll-mt-20">
            <div className="flex items-center gap-3">
              <Bug className="portfolio-icon size-5" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            <div className="space-y-6">
              {portfolioContent.experiences.map((experience) => (
                <Card key={`${experience.company}-${experience.period}`} className="portfolio-panel gap-0 rounded-[1.5rem] py-0">
                  <CardHeader className="gap-1 px-5 py-5">
                    <p className="font-mono text-sm uppercase tracking-wide text-muted-foreground">{experience.period}</p>
                    <CardTitle className="text-xl">{experience.role}</CardTitle>
                    <p className="text-base font-normal text-muted-foreground">{experience.company}</p>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <ul className="space-y-3">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet} className="relative pl-4">
                          <span className="portfolio-accent-bar absolute inset-y-0 left-0 w-1 rounded-full" />
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
            <div className="flex items-center gap-3">
              <Cpu className="portfolio-icon size-5" />
              <h2 className="text-2xl font-semibold">Certs & Awards</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="portfolio-panel gap-3 rounded-[1.5rem] py-5">
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
              <Card className="portfolio-panel gap-3 rounded-[1.5rem] py-5">
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
