import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Contact } from "@/components/portfolio/contact";

const meta = {
    title: "Portfolio/Contact",
    component: Contact,
    decorators: (Story) => (
        <div className="bg-background p-3">
            <Story />
        </div>
    )
} satisfies Meta<typeof Contact>

export default meta;

type Story = StoryObj<typeof Contact>

export const Basic: Story = {

}