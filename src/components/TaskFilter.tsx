import React, { useState } from "react";
import { Switch } from "antd";
import "../styles/TaskFilter.css";
import { useTaskContext } from "../Contexts/TasksContext";

function TaskFilter() {
  const { getAllTask, getTasksByStatus } = useTaskContext();
  
  const [showCompleted, setShowCompleted] = useState(false);
  const [showPending, setShowPending] = useState(false);

  const handleCompletedTask = (checked: boolean) => {
    setShowCompleted(checked);
    applyFilter(checked, showPending);
  };

  const handlePendingTask = (checked: boolean) => {
    setShowPending(checked);
    applyFilter(showCompleted, checked);
  };

  const applyFilter = (isCompleted: boolean, isPending: boolean) => {
    const filterActions = {
      all: getAllTask,
      completed: () => getTasksByStatus(true),
      pending: () => getTasksByStatus(false),
    };

    const selectedFilter = isCompleted && isPending ? "all" : isCompleted ? "completed" : isPending ? "pending" : "all";
    const action = filterActions[selectedFilter];
    action();
  };

  return (
    <div className="filters">
      <div className="completed-filter">
        <Switch
          onChange={handleCompletedTask}
          checked={showCompleted}
        />
        <span>Completed</span>
      </div>
      <div className="pending-filter">
        <Switch
          onChange={handlePendingTask}
          checked={showPending}
        />
        <span>Pending</span>
      </div>
    </div>
  );
}

export default TaskFilter;
