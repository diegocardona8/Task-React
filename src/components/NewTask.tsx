import React, { useState,ChangeEvent } from "react";
import { Input, Modal } from "antd";
import "../styles/new-Task.css";
import { Task } from '../Interfaces/Task';
import { useTaskContext } from "../Contexts/TasksContext";
import { PlusCircleOutlined } from "@ant-design/icons";

function NewTask(){

    //CHANGES RELATED WITH THE TASK CREATION PROCESS

    const { addNewTask } = useTaskContext();

    const [newTask, setNewTask] = useState<Task>({
        id: 0 ,
        taskName: "",
        status: false,
    });

    const [isTaskWindowVisible, setIsTaskWindowVisible] = useState(false);

    const handleInputChange = (textInput: ChangeEvent<HTMLInputElement>) =>{
        setNewTask({...newTask, taskName : textInput.target.value });
    };

    const handleCancelNewTask = () =>{
        setIsTaskWindowVisible(false);
    }

    const handleAddNewTask = () =>{
        addNewTask(newTask);
        setIsTaskWindowVisible(false);
    }

    const showNewTaskWindow = () =>{
        setIsTaskWindowVisible(true);
    }

    return(
        <div className="container">
        <PlusCircleOutlined onClick={showNewTaskWindow} 
        style={{fontSize: '50px' }} />
        <Modal
            title="Hi, Add new task"
            open={isTaskWindowVisible}
            okText={"Add"}
            onOk={handleAddNewTask}
            onCancel={handleCancelNewTask}
        >
            <Input
                type="text"
                onChange={handleInputChange}
                placeholder="Make BreakFast..."
            />
        </Modal>
      </div>

    );
}

export default NewTask;