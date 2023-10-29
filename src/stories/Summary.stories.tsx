import { Meta, StoryObj } from "@storybook/react";
import Summary from "../components/Summary";


const meta: Meta<typeof Summary> = {
    component: Summary,
    tags: ['autodocs'],
    title: 'Task Summary',
};

export default meta;

type Story = StoryObj<typeof Summary>;


export const Default: Story = {};
export const TODO: Story = {};
