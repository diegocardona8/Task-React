import { Checkbox, List } from "antd";
import { DeleteTwoTone, WarningOutlined} from "@ant-design/icons";
import "../styles/task-list.css";
import { useTaskContext } from "../Contexts/TasksContext";
import TaskFilter from './TaskFilter';
import NewTask from './NewTask';
import Summary from './Summary';
import OrderTask from './OrderTask';

import { useState } from "react";

function TaskList() {
  const { tasks,deleteTask,updateTaskStatus } = useTaskContext();

  const [highlightedTasks, setHighlightedTasks] = useState<{[key:number]:boolean}>({});

  const handlePriority = (taskId:number) =>{
    setHighlightedTasks((previousTask)=>{
      const newHighlightedTasks = {...previousTask};
      newHighlightedTasks[taskId] = !newHighlightedTasks[taskId];
      return newHighlightedTasks;
    });
  };

    return (
      <div className="list-container">
        <div className="filter-section">
          <TaskFilter />
        </div>
        <div className="list-task">
          <h1>Your Task List</h1>
          <List
            dataSource={tasks}
            renderItem={(task) => (
              <div className="list-Items">
                <List.Item style={{background: highlightedTasks[task.id] ? 'yellow' : 'transparent'}}
                key={task.id}
                actions={[
                  <Checkbox
                    checked={task.status}
                    onChange={() => updateTaskStatus(task.id, !task.status)}
                  >
                  </Checkbox>,
                  <span className="name">{task.taskName}</span>,
                  <DeleteTwoTone  className="delete-button"
                    onClick={() => deleteTask(task.id)}
                  >
                  </DeleteTwoTone>,
                  <WarningOutlined
                    onClick={()=>handlePriority(task.id)}
                  >
                  </WarningOutlined>,
                  <OrderTask taskId ={task.id}/>
                ]}
              />
              </div>
            )}
          />
        </div>
        <NewTask/>
        <Summary/>
      </div>
    );
}

export default TaskList;
