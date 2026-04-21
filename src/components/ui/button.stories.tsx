import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";

const meta = {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Button"
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {

}

export const Variants: Story = {
    render: () => (
        <div className="flex gap-3">
            <Button>
                Default
            </Button>
            <Button variant="secondary">
                Secondary
            </Button>
            <Button variant="destructive">
                Destructive
            </Button>
            <Button variant="ghost">
                Ghost
            </Button>
            <Button variant="link">
                Link
            </Button>
            <Button variant="outline">
                Outline
            </Button>
        </div >
    )
}