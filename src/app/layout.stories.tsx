import { Meta, StoryObj } from "@storybook/nextjs-vite";
import RootLayout from "./layout";

const meta = {
    title: "Pages/RootLayout",
    component: RootLayout,
    tags: ["!autodocs"]
} satisfies Meta<typeof RootLayout>;


export default meta;

type Story = StoryObj<typeof RootLayout>;

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