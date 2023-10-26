import { DownOutlined, UpOutlined} from "@ant-design/icons";
import {useTaskContext} from "../Contexts/TasksContext";



function OrderTask ({taskId}:{taskId:number}){

    const {tasks, orderTask} = useTaskContext();

    function findTaskIndex(id:number) : number{
        return tasks.findIndex((task) => task.id === id);
    };

    const handleUpTask = () =>{

        var taskIndex = findTaskIndex(taskId);

        if(taskIndex > 0){

            const newOrder = [...tasks];
            //Asignación por destructuring con arrays
            [newOrder[taskIndex], newOrder[taskIndex - 1]] = [newOrder[taskIndex-1], newOrder[taskIndex]];
            orderTask(newOrder);
        }
    }

    const handleDownTask = () =>{

        var taskIndex = findTaskIndex(taskId);

        if(taskIndex < tasks.length - 1){

            //Hacemos una copia del array original- es buena practica
            const newOrder = [...tasks];

            [newOrder[taskIndex],newOrder[taskIndex + 1]] = [newOrder[taskIndex + 1],newOrder[taskIndex]];
            orderTask(newOrder);
        }
    };

    return (
        <div className="orderTask-container">
            <UpOutlined
            onClick={handleUpTask}
            />
            <DownOutlined
            onClick={handleDownTask}
            />
        </div>
    );

}

export default OrderTask;