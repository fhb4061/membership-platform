import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { expect, fn } from "storybook/test";

const meta = {
    title: "Components/UI/Button",
    component: Button,
    args: {
        children: "Button",
        onClick: fn()
    },
    argTypes: {
        size: {
            options: ["default", "sm", "icon-xs", "icon-sm", "icon-lg"]
        },
        variant: {
            options: ["default"],
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
    play: async ({ canvas, userEvent, args }) => {
        const button = await canvas.findByRole("button", { name: "Button" });

        // assert onClick event
        await userEvent.click(button);
        expect(args.onClick).toHaveBeenCalled();
    }
}

export const Disabled: Story = {
    args: {
        disabled: true
    },
    play: async ({ canvas }) => {
        const button = await canvas.findByRole("button", { name: "Button" });

        expect(button).toBeDisabled();
    }
}

export const SizePreview: Story = {
    render: () => (
        <div className="grid gap-5">
            <span>Basic</span>
            <div className="flex gap-2 items-center">
                <Button>Default</Button>
                <Button size="sm">Small</Button>
            </div>

            <span>Icon only</span>
            <div className="flex gap-2 items-center">
                <Button size="icon-lg">
                    <Briefcase />
                </Button>
                <Button size="icon-sm">
                    <Briefcase />
                </Button>
                <Button size="icon-xs">
                    <Briefcase />
                </Button>
            </div>
        </div>
    )
}