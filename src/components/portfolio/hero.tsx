import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
        <section id="hero" className="space-y-4 scroll-mt-20">
            <Badge variant="outline" className={cn("rounded-full border-primary/35 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground")}>
                {portfolioHero.name}
            </Badge>
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl lg:text-[2.85rem] lg:leading-[1.05]">
                {portfolioHero.headline}
            </h1>
        </section>
    )
}