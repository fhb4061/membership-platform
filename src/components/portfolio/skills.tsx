import { Wrench } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type SkillGroup = {
    title: string;
    items: string[];
};

// usually get this from api maybe but will leave it here for simplicity
const skills: SkillGroup[] = [
    {
        title: "Frontend",
        items: [
            "React (JS/TS)",
            "Redux / Redux Toolkit",
            "RxJS",
            "Tailwind CSS",
            "Jest",
            "Cypress",
            "Playwright",
            "React Testing Library",
            "UI/UX Design",
        ],
    },
    {
        title: "Backend",
        items: ["Spring Boot (Java/Kotlin)", "GraphQL", "Kafka", "Swagger", "Apigee", "Oracle DB", "DB2"],
    },
    {
        title: "DevOps & Tools",
        items: [
            "Docker",
            "Jenkins",
            "OpenShift",
            "Nx mono-repo",
            "Dynatrace",
            "Splunk",
            "Graylog",
            "Micro-frontend architecture",
        ],
    },
    {
        title: "Practices",
        items: ["Agile (Scrum/Kanban)", "Leadership", "Mentorship", "Requirements Analysis", "Continuous Integration", "Test Automation"],
    },
];

export function Skills() {

    return (
        <section id="skills" className="space-y-6 scroll-mt-20">
            <div className="flex items-center gap-3">
                <Wrench className="portfolio-icon size-5" />
                <h2 className="text-2xl font-semibold">Skills</h2>
            </div>
            <div className="portfolio-soft-panel">
                {skills.map((group, index) => (
                    <div key={group.title}>
                        {index > 0 && <Separator className="portfolio-divider" />}
                        <article className="grid gap-2 p-4 sm:grid-cols-[170px_1fr] sm:items-start">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{group.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{group.items.join(", ")}</p>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}