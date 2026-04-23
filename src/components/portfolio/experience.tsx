import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    bullets: string[];
};

// usually get this from api maybe but will leave it here for simplicity
const experiences: ExperienceItem[] = [
    {
        role: "Senior Developer",
        company: "New Zealand Police",
        period: "Nov 2023 - Feb 2026",
        bullets: [
            "Led development of photo sharing feature used by officers and photographers; streamline case building procedures.",
            "Delivered features improving visibility of critical operational data, including bail status, task assignment, and officer location context.",
            "Migrated legacy frontends into an Nx-managed React (TypeScript) monorepo to improve maintainability and reduce duplication.",
            "Designed and introduced Playwright based e2e automation architecture and CI pipeline stages for reliable regression coverage.",
            "Improved CI/CD simplicity and build performance via Docker multi-stage builds with stage-level caching.",
            "Upgraded React and Angular applications to patch vulnerabilities and align with newer framework standards.",
        ],
    },
    {
        role: "Developer",
        company: "Bank of New Zealand",
        period: "Feb 2019 - Nov 2023",
        bullets: [
            "Delivered daily used staff workflows including Visa card ordering, blocking, and unblocking across branch operations.",
            "Pioneered BNZ's first micro-frontend (AngularJS), then modernized it to React (TypeScript), setting patterns for future initiatives.",
            "Built frontend and microservice features end-to-end in a distributed microservices ecosystem.",
            "Automated ServiceNow standard-change creation pre-deployment, increasing release cadence from once every two days to multiple releases daily.",
            "Migrated Spring Boot APIs from Oracle JDK 8 to OpenJDK 11 to reduce technical debt and address vulnerabilities.",
            "Implemented Dynatrace monitoring/logging and maintained Cypress e2e coverage and onboarding documentation.",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="space-y-6 scroll-mt-20">
            <div className="flex items-center gap-3">
                <BriefcaseBusiness className="portfolio-icon size-5" />
                <Heading
                    label="Experience"
                    size={2}
                />
            </div>
            <div className="space-y-6">
                {experiences.map((experience) => (
                    <Card key={`${experience.company}-${experience.period}`}>
                        <CardHeader className="gap-1 pb-2">
                            <CardTitle className="text-xl">{experience.role}</CardTitle>
                            <CardDescription>
                                <p className="text-base font-normal">{experience.company}</p>
                                <p className="text-sm uppercase tracking-wide">{experience.period}</p>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {experience.bullets.map((bullet) => (
                                    <li key={bullet} className="relative pl-4">
                                        <span className="bg-primary/50 absolute inset-y-0 left-0 w-1 rounded-full" />
                                        <span className="relative text-sm leading-relaxed sm:text-base">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}