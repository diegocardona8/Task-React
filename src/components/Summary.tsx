import "../styles/summary.css";
import {useTaskContext} from "../Contexts/TasksContext";

function Summary () {

    const {tasks} = useTaskContext();

    const pendingTask = tasks.filter((task) => !task.status);
    const completedTask = tasks.filter((task) => task.status);

    return (
        <div className="summary-container">
            <p>Pending Task {pendingTask.length}</p>
            <p>Completed Task {completedTask.length}</p>
        </div>
    );

}

export default Summary;