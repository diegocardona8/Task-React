import { Checkbox, List } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import "../styles/task-list.css";
import { useTaskContext } from "../Contexts/TasksContext";
import TaskFilter from './TaskFilter';
import NewTask from './NewTask';

function TaskList() {
  const { tasks,deleteTask,updateTaskStatus } = useTaskContext();

    //3. SUMARRY
    const PeddingTask = tasks.filter((task) => !task.status);
    const CompletedTask = tasks.filter((task) => task.status);

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
                <List.Item
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
                    style={{fontSize: '20px' }}
                  >
                    Delete
                  </DeleteTwoTone>,
                ]}
              />
              </div>
            )}
          />
        </div>
        <NewTask/>
        <div className="summary-container">
            <p>Pending Task {PeddingTask.length}</p>
            <p>Completed Task {CompletedTask.length}</p>
          </div>
      </div>
    );
}

export default TaskList;
