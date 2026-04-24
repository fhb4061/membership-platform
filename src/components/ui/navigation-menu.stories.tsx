import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "./button";
import { BriefcaseBusiness, LucideIcon, Mail, UserRound, Wrench } from "lucide-react";

const meta = {
    title: "Components/UI/NavigationMenu",
    component: NavigationMenu,
    decorators: (Story) => (
        <div className="bg-background p-3">
            <Story />
        </div>
    )
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

        const renderNavItems = (showLabel: boolean = true) => navItems.map((item) => {
            const Icon = item.icon;

            return (
                <NavigationMenuItem key={item.id}>
                    <Button
                        size={showLabel ? "sm" : "icon-sm"}
                    >
                        <Icon />
                        {showLabel ? item.label : null}
                    </Button>
                </NavigationMenuItem>
            )
        });

        return (
            <div className="grid gap-5">
                <div className="grid gap-2">
                    <span>With labels</span>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {renderNavItems()}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="grid gap-2">
                    <span>With icons</span>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {renderNavItems(false)}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        )
    }
}