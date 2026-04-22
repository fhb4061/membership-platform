import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "@/components/ui/button";

const meta = {
    title: "Components/Panel/Card",
    component: Card,
} satisfies Meta<typeof Card>

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
    render: () => (
        <Card>
            <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
                <CardAction>
                    <Button>
                        Action
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </CardContent>
            <CardFooter>
                Footer
            </CardFooter>
        </Card>
    )
}