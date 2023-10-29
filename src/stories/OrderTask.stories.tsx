import type { Meta, StoryObj } from '@storybook/react';
import OrderTask from '../components/OrderTask';



const meta: Meta<typeof OrderTask> = {
    component: OrderTask,
    title: 'Order Task',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OrderTask>;

export const Default: Story = {};
export const TODO : Story = {};


