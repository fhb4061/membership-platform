import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta = {
    title: "Components/Badge",
    component: Badge,
    tags: ['autodocs'],
    args: {
        children: 'Badge'
    },
    argTypes: {
        variant: {
            options: ['default', 'secondary', 'destructive', 'ghost', 'link', 'outline'],
            description: "Different style variations for the badge"
        }
    }
} satisfies Meta<typeof Badge>

export default meta;

type Story = StoryObj<typeof Badge>

export const Variants: Story = {

}