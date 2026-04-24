import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MainNavigation } from "./main-navigation";

const meta = {
    title: "Navigation/MainNavigation",
    component: MainNavigation,
    decorators: (Story) => (
        <div className="bg-background p-3">
            <Story />
        </div>
    )
} satisfies Meta<typeof MainNavigation>;

export default meta;

type Story = StoryObj<typeof MainNavigation>

export const Basic: Story = {

}

export const MobileScreen: Story = {
    globals: {
        viewport: { value: "mobile1" }
    }
}