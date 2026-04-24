import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Home from "./page";

const meta = {
    title: "Pages/Home",
    component: Home,
    tags: ["!autodocs"]
} satisfies Meta<typeof Home>

export default meta;

type Story = StoryObj<typeof Home>;

export const Desktop: Story = {

}

export const Tablet: Story = {
    globals: {
        viewport: { value: "tablet" }
    }
}

export const Mobile: Story = {
    globals: {
        viewport: { value: "mobile1" }
    }
}