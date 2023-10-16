import React, { useState, ChangeEvent} from "react";
import { Button, Checkbox, Input, List } from "antd";
import "../styles/task-list.css";
import { useTaskContext } from "../Contexts/TasksContext";
import { Task } from '../Interfaces/Task';
import TaskFilter from './TaskFilter';

function TaskList() {
  const { tasks,addNewTask,deleteTask,updateTaskStatus } = useTaskContext();

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
      <div className="list">
        <div className="filter-section">
          <TaskFilter />
        </div>
        <div>
          <h1>Your Task List</h1>
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
                  </Checkbox>,
                  <span>{task.taskName}</span>,
                  <Button onClick={() => deleteTask(task.id)} danger>
                    Delete
                  </Button>
                ]}
              />
            )}
          />
          <div>
            <Input
              type="text"
              onChange={handleInputChange}
              placeholder="New Task"
            />
            <Button onClick={()=> addNewTask(newTask)}>Add</Button>
          </div>
          <div>
            <p>Pending Task {PeddingTask.length}</p>
            <p>Completed Task {CompletedTask.length}</p>
          </div>
        </div>
      </div>
    );
}

export default TaskList;
