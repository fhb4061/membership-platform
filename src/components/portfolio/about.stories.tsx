import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { About } from "@/components/portfolio/about";

const meta = {
    title: "Portfolio/About",
    component: About,
    decorators: (Story) => (
        <div className="bg-background p-3">
            <Story />
        </div>
    )
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof About>;

export const Basic: Story = {

}