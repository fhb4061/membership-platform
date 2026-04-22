import { Heading } from "@/components/ui/Heading";

type PortfolioHero = {
    name: string;
    headline: string;
    heroSummary: string;
};

// usually get this from api maybe but will leave it here for simplicity
const portfolioHero: PortfolioHero = {
    name: "Jonathan Lopeti",
    headline: "Full-Stack Engineer",
    heroSummary:
        "Full-stack developer with 7+ years delivering scalable, user-centric web applications across banking and public-sector domains.",
};

export function Hero() {
    return (
        <section id="hero" className="space-y-2 scroll-mt-20">
            <Heading
                label={portfolioHero.name}
            />
            <Heading
                size={2}
                label={portfolioHero.headline}
            />
        </section>
    )
}