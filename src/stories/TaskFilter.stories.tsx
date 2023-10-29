import { type } from "doctrine";
import TaskFilter from "../components/TaskFilter";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof TaskFilter> = {
  title: "Task-Filter",
  component: TaskFilter,
};
export default meta;

type Story = StoryObj<typeof TaskFilter>;

export const Default: Story = {
  args:{
    styleVariant: "",
    disabled:false,
  }
};

export const Completed: Story = {
  args:{
    styleVariant: "filters-enabled",
    disabled:false,
  }
};

export const Pending: Story = {
  args:{
    styleVariant: "filters-disabled",
    disabled:false,
  }
};