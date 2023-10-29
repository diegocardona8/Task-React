import TaskFilter from "../components/TaskFilter";

export default {
  title: "TaskFilter",
  component: TaskFilter,
};


export const Default = () => <TaskFilter styleVariant="" disabled={false}/>
export const Enabled = () => <TaskFilter styleVariant="filters-enabled" disabled={false}/>
export const Disabled = () => <TaskFilter styleVariant="filters-disabled" disabled={false}/>

