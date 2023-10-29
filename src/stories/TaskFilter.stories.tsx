import TaskFilter  from "../components/TaskFilter";

export default {
    title: "TaskFilter",
    component: TaskFilter,
};

export const Default = () => <TaskFilter/>;
export const CompletedFilter = () => <TaskFilter/>;
export const PendingFilter = () => <TaskFilter/>;