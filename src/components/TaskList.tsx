import React, { useState, ChangeEvent} from "react";
import { Button, Checkbox, Input, List } from "antd";
import "../styles/task-list.css";
import { useTaskContext } from "../Contexts/TasksContext";
import { Task } from '../Interfaces/Task';


function TaskList() {
  const { tasks,getTasksByStatus,addNewTask,deleteTask,updateTaskStatus } = useTaskContext();

  //1. CHANGES RELATED WITH THE CHECKBOX AND THE UPDATE

    //Estableces este Hook para controlar el estado del checkbox de las tareas completadas
    const [filterStatus, setFilterStatus] = useState(false);

    //Función que se llama cuando ocurre un cambio en el checkbox para luego,cambiar el estado
    const handleCheckboxChange  = (checked: boolean) => {
      setFilterStatus(checked);
    };

  //2. CHANGES RELATED WITH THE TASK CREATION PROCESS

    const [newTask, setNewTask] = useState<Task>({
      id: 0 ,
      taskName: "",
      status: false,
    });
    
    const handleInputChange = (textInput: ChangeEvent<HTMLInputElement>) =>{
      const test = textInput.target.value;
      console.log("Valor de una variable:", test);
      setNewTask({...newTask, taskName : textInput.target.value });
    };

    //3. SUMARRY

    const PeddingTask = tasks.filter((task) => !task.status);

    const CompletedTask = tasks.filter((task) => task.status);
  
    return (
      <div className="todo-list">
      <div>
        <Checkbox
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        >
        Completada
        </Checkbox>
        <Button onClick={() =>getTasksByStatus(filterStatus)}>Search</Button>
      </div>
        <h1>My Task List</h1>
        <List
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item
              key={task.id}
              actions={[
                <Checkbox
                  checked={task.status}
                  onChange={() => updateTaskStatus(task.id, !task.status)}
                >
                  Completed
                </Checkbox>,
                <Button onClick={() => deleteTask(task.id)} danger>
                  Delete
                </Button>,
              ]}
            >
              {task.taskName}
            </List.Item>
          )}
        />
        <div>
        <Input
            type="text"
            onChange={handleInputChange}
            placeholder="New Task"
          />
          <Button onClick={()=>addNewTask(newTask)}>Add</Button>
        </div>
        <div>
          <p>Pendding Task {PeddingTask.length}</p>
          <p>Completed Task {CompletedTask.length}</p>
        </div>
      </div>
    );
}

export default TaskList;
