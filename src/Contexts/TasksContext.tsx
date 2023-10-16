import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  GetAllTasks,
  GetTaskByStatus,
  AddTask,
  UpdateTask,
  DeleteTask,
} from '../api/apiRequest';

import { Task } from '../Interfaces/Task';
import { TaskContextType } from '../Interfaces/TaskContextType';

// 1. Crear el contexto
const Context = createContext<TaskContextType>({
  tasks: [],
  getAllTask:() =>{},
  getTasksByStatus: () => {},
  addNewTask: () => {},
  updateTaskStatus: () => {},
  deleteTask: () => {},
});

// 2. Crear una función para devolver los datos del contexto que también se compartirán con otros componentes
export const useTaskContext = () => {
  return useContext(Context);
}

// 3. Crear la función del proveedor: esta función proporcionará los datos de contexto que se compartirán con los componentes secundarios
const TaskContextProvider = ({ children }: { children: ReactNode }) => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const getAllTask = async () => {
    try {
      const allTasks = await GetAllTasks();
      setTasks(allTasks);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  // Realizar un efecto secundario: se ejecutará solo una vez cuando se renderice el componente
  useEffect(() => {
    getAllTask();
  }, []);

  const getTasksByStatus = async (filterStatus: boolean) => {
    try {
      const filteredTasks = await GetTaskByStatus(filterStatus);
      setTasks(filteredTasks);
    } catch (error) {
      console.error('Error al obtener tareas por estado:', error);
    }
  };

  const addNewTask = async (task: Task) => {
    try {
      const taskadded = await AddTask(task);
      setTasks((prevTasks)=>[...prevTasks, taskadded]);
    }catch (error) {
      console.error('Error al agregar una nueva tarea:', error);
    }
  };

  const updateTaskStatus = async (id: number, isCompleted: boolean) => {
    try {
      await UpdateTask(id, isCompleted);
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, status: isCompleted } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al actualizar el estado de la tarea:', error);
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      await DeleteTask(taskId);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <Context.Provider value={{
      tasks,
      getAllTask,
      getTasksByStatus,
      addNewTask,
      updateTaskStatus,
      deleteTask,
    }}>
      {children}
    </Context.Provider>
  );
}
export default TaskContextProvider;