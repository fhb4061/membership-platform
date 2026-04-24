import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "@/components/ui/heading";
import { expect } from "storybook/test";

const meta = {
    title: "Components/UI/Heading",
    component: Heading,
    args: {
        label: "Heading"
    },
    argTypes: {
        size: {
            options: [1, 2]
        }
    }
} satisfies Meta<typeof Heading>

export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
    play: async ({ canvas }) => {
        expect(await canvas.findByRole("heading", { level: 1 })).toBeInTheDocument();
    }
}

export const Heading2: Story = {
    args: {
        size: 2
    },
    play: async ({ canvas }) => {
        expect(await canvas.findByRole("heading", { level: 2 })).toBeInTheDocument();
    }
}

export const SizePreview: Story = {
    render: (args) => (
        <div className="grid gap-2">
            <Heading
                {...args}
            />
            <Heading
                size={2}
                {...args}
            />
        </div>
    )
}