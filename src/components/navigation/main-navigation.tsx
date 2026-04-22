
import { Award, BriefcaseBusiness, House, LucideIcon, Mail, UserRound, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

type PortfolioSectionId = "about" | "skills" | "experience" | "certs-awards" | "contact";

type PortfolioNavItem = {
    id: PortfolioSectionId;
    label: string;
};

type NavSectionId = PortfolioSectionId | "hero";

const desktopNavItems: PortfolioNavItem[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certs-awards", label: "Certs" },
];

const navIconMap: Record<NavSectionId, LucideIcon> = {
    hero: House,
    about: UserRound,
    skills: Wrench,
    experience: BriefcaseBusiness,
    "certs-awards": Award,
    contact: Mail,
};

export function MainNavigation() {
    const mobileNavItems: { id: NavSectionId; label: string }[] = [
        { id: "hero", label: "Hero" },
        ...desktopNavItems,
    ];

    const renderNavItems = (items: { id: NavSectionId; label: string }[], showLabel: boolean, keyPrefix: string) =>
        items.map((item) => {
            const Icon = navIconMap[item.id];

            return (
                <NavigationMenuItem key={`${keyPrefix}-${item.id}`}>
                    <Button
                        asChild
                        size={showLabel ? "sm" : "icon-sm"}
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
        <div className="backdrop-blur sticky top-0 z-10 flex justify-center items-center inset-6 border-b border-border">
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
    )
}