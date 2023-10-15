import {Task} from './Task'

export interface TaskContextType {
    tasks: Task[];
    getTasksByStatus: (filterStatus: boolean) => void;
    addNewTask: (task: Task) => void; 
    updateTaskStatus: (id: number, isCompleted: boolean) => void;
    deleteTask: (taskId: number) => void;
  }