import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Experience } from "./experience";

const meta = {
    title: "Portfolio/Experience",
    component: Experience,
    decorators: (Story) => (
        <div className="bg-background p-3">
            <Story />
        </div>
    )
} satisfies Meta<typeof Experience>

export default meta;

type Story = StoryObj<typeof Experience>;

export const Basic: Story = {

}