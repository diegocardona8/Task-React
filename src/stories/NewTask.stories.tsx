
import type { Meta, StoryObj } from '@storybook/react';
import NewTask from '../components/NewTask';


const meta: Meta<typeof NewTask> = {
    component: NewTask,
    tags: ['autodocs'],
    title: 'New Task',
};

export default meta;

type Story = StoryObj<typeof NewTask>;


export const Default : Story = {
    args:{
        isAddButtonShow: true,
        isCancelButtonShow: true,
        modalTitle: "Hi, Add new task",
        iconColor: "blue",
        
    },
};

export const IconRed : Story = {
    args:{
        isAddButtonShow: true,
        isCancelButtonShow: true,
        modalTitle: "Hi, this is a test",
        iconColor: "red",
        
    },
};

export const DisabledButtonsFunctionality : Story = {
    args:{
        isAddButtonShow: false,
        isCancelButtonShow: false,
        modalTitle: "Hi, this is a test",
        iconColor: "blue",
        
    },
};