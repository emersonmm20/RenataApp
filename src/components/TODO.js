import {useState} from 'react'
import './tasks.css'
import { TaskList } from './TaskList/TaskList'



export const TODO = ()=>{

    const [display,setDisplay]=useState(false)
    const [taskList,setTaskList]=useState([])
    const [idTask,setIdTask]=useState(0)
    const changeDisplay=()=>setDisplay(!display)

    const addNewTask=()=>{
        const inputNewTask=document.getElementById("input-task")
        setTaskList([...taskList, [inputNewTask.value, idTask,0]]) //<----[TaskName, idTask, statusTask]
        console.log(taskList)

        setIdTask(idTask + 1)
        inputNewTask.value=""
        setDisplay(!display)
    }
    
    const resetAll=()=>{
        if (window.confirm("Delete all task?")){
            setTaskList([])
            setIdTask(0)

        }
        
    }
    // const assignTask=(task,position)=>{  <-----------realizar despues la asignacion de tareas/listas
    //     if(task[2]==position){
    //         return ()
    //     }

    // }

    return (
        <div className="todo-list">
            
            {/* NEW TASK------------------------------- */}
            <div className='input' id='div-input' style={ display ? {display: 'flex'}: {display: 'none'}}
            onClick={changeDisplay}>
                <div onClick={(e)=>{e.stopPropagation()}}>
                    <input type='text' id='input-task' placeholder='Create a New Task' onKeyDown={(e)=>{if (e.key=='Enter'){addNewTask()}}}/>
                    <button id='send-task' onClick={addNewTask}>Create Task</button>
                    <button id='close-new-task' onClick={changeDisplay}>close</button>
                </div>
            </div>
            {/*--------------------- list ---------------------- */}
            <div className='list-container'>
            <button id='open-new-task' onClick={changeDisplay}>New Task</button>
                {/* TODO LIST---------------------- */}
                <TaskList
                name="toDo"
                id="todo-list"
                list={
                    <ul>
                        {taskList.map(task=>
                        (
                            <li id={`${task[2]}`}>{task[0]} <button>Del</button><button>Do</button></li>
                        ))}
                    </ul>

                }
                />
                {/* IN PROGRESS---------------------- */}
                <TaskList
                name="In progress"
                id="progress-list"
                list={[]}
                />
                {/*COMPLETED---------------------- */}
                <TaskList
                name="Completed"
                id="Completed-list"
                list={[]}
                />
                <button id='reset-all-task' onClick={resetAll}>reset all</button>
            </div>
            
            
        </div>
    );
}