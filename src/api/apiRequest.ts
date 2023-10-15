import {
        API_DELETE_TASK_BY_ID_ENDPOINT,
        API_GET_TASKS_ENDPOINT,
        API_GET_TASK_BY_STATUS_ENDPOINT,
        API_UPDATE_TASK_ENDPOINT,
        API_SAVE_TASK_ENDPOINT}
        from './apiConfig'

import { Task } from '../Interfaces/Task';

export const GetAllTasks = async () =>{
    try{

        const endPointName = `${API_GET_TASKS_ENDPOINT}`;
        const response = await fetch(endPointName);

        if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            console.error("Error to upload the task after update");
          }

    }catch(error){
        console.error("Error Try Getting All Task:", error);
    }
}

export const GetTaskByStatus = async (filterStatus:boolean) =>{
    try{
        const endPointName = `${API_GET_TASK_BY_STATUS_ENDPOINT}/${filterStatus}`;
        const response = await fetch(endPointName);

        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            console.error("Error to upload the task after update");
        }
    }catch(error){
        console.error("Error Try Getting Task filtered by status:", error);
    }
}

export const AddTask = async (task:  Task) =>{
    try{
        const endPointName = `${API_SAVE_TASK_ENDPOINT}`;
        const response = await fetch(endPointName,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                TaskName: task.taskName,
                IsCompleted: false
            })
        });

        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            console.error("Error to try add new task in the database");
        }
    }catch(error){
        console.error("Error Try add new Task:", error);
    }
}

export const UpdateTask = async (id: number, isCompleted: boolean) =>{
    try{

        const command = {
            TaskId: id,
            TaskStatus: isCompleted ? true : false,
          };

        const endPointName = `${API_UPDATE_TASK_ENDPOINT}`;
        const response = await fetch(endPointName,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(command),
        });

        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            console.error("Error to try add new task in the database");
        }
    }catch(error){
        console.error("Error Try add new Task:", error);
    }
}

export const DeleteTask = async (Taskid:number) =>{
    try{
        const endPointName = `${API_DELETE_TASK_BY_ID_ENDPOINT}/${Taskid}`;
        const response = await fetch(endPointName,{
            method: 'DELETE',
        });

        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            console.error("Error to try add new task in the database");
        }
    }catch(error){
        console.error("Error Try add new Task:", error);
    }
}