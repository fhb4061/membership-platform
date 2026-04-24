import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CertsAward } from "@/components/portfolio/certs-award";

const meta = {
    title: "Portfolio/CertsAward",
    component: CertsAward,
    decorators: (Story) => (
        <div className="bg-background p-3">
            <Story />
        </div>
    )
} satisfies Meta<typeof CertsAward>

export default meta;

type Story = StoryObj<typeof CertsAward>;

export const Basic: Story = {

}