import { Wrench } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Panel } from "@/components/ui/panel";
import { Heading } from "@/components/ui/heading";

type SkillGroup = {
    title: string;
    items: string[];
};

// usually get this from api maybe but will leave it here for simplicity
const skills: SkillGroup[] = [
    {
        title: "Frontend",
        items: [
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "UI/UX Design",
            "Micro-frontend"
        ],
    },
    {
        title: "Backend",
        items: ["Spring Boot Java", "GraphQL", "Kafka", "Microservices"],
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
        ],
    },
    {
        title: "Practices",
        items: ["Agile (Scrum/Kanban)", "Leadership", "Mentorship", "Test Automation"],
    },
];

export function Skills() {

    return (
        <section id="skills" className="space-y-6 scroll-mt-20">
            <div className="flex items-center gap-3">
                <Wrench className="portfolio-icon size-5" />
                <Heading
                    label="Skills"
                    size={2}
                />
            </div>
            <Panel>
                {skills.map((group, index) => (
                    <div key={group.title} className="grid gap-2">
                        {index > 0 && <Separator />}
                        <article className="grid py-2 px-1 sm:grid-cols-[170px_1fr] sm:items-start">
                            <h3 className="text-sm font-semibold uppercase tracking-wide">{group.title}</h3>
                            <p className="text-sm leading-relaxed sm:text-base">{group.items.join(", ")}</p>
                        </article>
                    </div>
                ))}
            </Panel>
        </section>
    )
}