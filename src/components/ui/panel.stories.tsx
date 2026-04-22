import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Panel } from "./panel";

const meta = {
    title: "Components/Panel/Panel",
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
    },
    component: Panel
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof Panel>;

export const Basic: Story = {
}