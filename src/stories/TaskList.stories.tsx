import TaskList from '../components/TaskList';
import { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof TaskList> = {
    component: TaskList,
    tags: ['autodocs'],
    title: 'Task List',

};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {};
export const TODO: Story = {};