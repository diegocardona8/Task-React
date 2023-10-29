import TaskFilter from "../components/TaskFilter";
import type { Meta, StoryObj } from '@storybook/react';

// Configure Meta Data
const meta : Meta<typeof TaskFilter> = {
  component: TaskFilter,
  // allow document the story in document format
  tags: ['autodocs'],
  title: "Task-Filter",
  // Configure props values to stotybook URL level
  argTypes: {
    styleVariant:{
      control: {type: 'select'},
      options: ['filters-enabled','filters-disabled'],
    },
    disabled:{
      control: {type: 'radio'},
      options: [true,false],
    },
  },
};
export default meta;

type Story = StoryObj<typeof TaskFilter>;

// this is the shape of make a comment to document - tags: ['autodocs'], (see below)
/** Default Story - TaskFilter component to task by default status */
export const Default: Story = {
  args:{
    styleVariant: "",
    disabled:false,
  }
};

/**  Completed Story - TaskFilter component to task completed */
export const Completed: Story = {
  args:{
    styleVariant: "filters-enabled",
    disabled:false,
  }
};

/**  Pending Story  - TaskFilter component to task pending */
export const Pending: Story = {
  args:{
    styleVariant: "filters-disabled",
    disabled:false,
  }
};


/** Grouped Story - Render TaskFilter component with many elemenets(css,html, other components) */
export const Grouped: Story = {
 render: (args) => (
  <div
    style ={{
        backgroundColor: 'red',
        width: 400,
        padding: 20
    }}>
    <TaskFilter styleVariant="" disabled={false}/>
    <TaskFilter styleVariant="filters-disabled" disabled={false}/>
    <TaskFilter styleVariant="filters-enabled" disabled={false}/>
  </div>
 ),
};