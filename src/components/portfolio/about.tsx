import { UserRound } from "lucide-react";
import { Heading } from "@/components/ui/heading";

export function About() {
    return (
        <section id="about" className="space-y-3 scroll-mt-20">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <UserRound className="portfolio-icon size-5" />
                    <Heading
                        size={2}
                        label="About"
                    />
                </div>
                <p className="max-w-4xl text-base leading-relaxed sm:text-lg">
                    Over the past 7+ years, I have delivered scalable, user-centric software across banking and public-sector domains. I specialize in React and Spring Boot with a strong focus on clean architecture, simplicity, performance, and both user and developer experience.
                </p>
            </div>
        </section>
    )
}