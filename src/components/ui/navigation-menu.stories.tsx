import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "./button";
import { BriefcaseBusiness, LucideIcon, Mail, UserRound, Wrench } from "lucide-react";

const meta = {
    title: "Components/Navigation",
    component: NavigationMenu,
    tags: ["autodocs"]
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof NavigationMenu>

export const Basic: Story = {
    render: () => {
        type NavItem = {
            id: "about" | "skills" | "experience" | "contact";
            label: string,
            icon: LucideIcon;
        }

        const navItems: NavItem[] = [
            {
                id: "about",
                label: "About",
                icon: UserRound
            },
            {
                id: "skills",
                label: "Skills",
                icon: Wrench
            },
            {
                id: "experience",
                label: "Experience",
                icon: BriefcaseBusiness
            },
            {
                id: "contact",
                label: "Contact",
                icon: Mail
            }
        ];

        const renderNavItems = () => navItems.map((item) => {
            const Icon = item.icon;

            return (
                <NavigationMenuItem key={item.id}>
                    <Button
                        variant="outline"
                    >
                        <Icon />
                        {item.label}
                    </Button>
                </NavigationMenuItem>
            )
        });

        return (
            <NavigationMenu>
                <NavigationMenuList>
                    {renderNavItems()}
                </NavigationMenuList>
            </NavigationMenu >
        )
    }
}