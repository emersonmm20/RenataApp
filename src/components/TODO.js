import {useState} from 'react'
import './tasks.css'
import { TaskList } from './TaskList/TaskList'



export const TODO = ()=>{

    const [display,setDisplay]=useState(false)
    const [taskList,setTaskList]=useState([])
    const [idTask,setIdTask]=useState(1)
    const changeDisplay=()=>setDisplay(!display)
    

    const addNewTask=()=>{
        const inputNewTask=document.getElementById("input-task")
        setTaskList([...taskList, [inputNewTask.value, idTask,0]]) //<----[TaskName, idTask, statusTask]
        setIdTask(idTask + 1)
        inputNewTask.value=""
        // setDisplay(!display)
    }
    
    const resetAll=()=>{
        if (window.confirm("Delete all task?")){
            setTaskList([])
            setIdTask(0)
        }
        
    }
    const deleteTask=(task)=>{
        setTaskList()
    }
    const changeTaskStatus=(task)=>{
        return 0
    }
    const asignListTask=(task,position)=>{
        // Parentesis--------------------------------
        //la funcion recibirá dos parametros, la tarea y el estado de la tarea. en caso de que la posision deseada sea la indicada (tarea->estado) se retorna. esta funcion simplemente
        //asigna la tarea a sus listas correspondientes, cambiar el estado ya se hace en otra funcion.
        const idTask=task[1]
        const nameTask=task[0]

        if(task[2]==position){
            
            return(
                <li id={`task-${idTask}`} className='universal-list-element' >
                    <p>{nameTask}</p>
                    <div>
                    <button onClick={()=>changeTaskStatus(task)}>Do</button>
                    <button onClick={()=>deleteTask(task)}>Del</button>
                    </div>
                </li>
                )

        }

        
    }
    

    return (
        <div className="todo-list">
            
            {/* NEW TASK------------------------------- */}
            <div className='input' id='div-input' style={ display ? {display: 'flex'}: {display: 'none'}}
            onClick={changeDisplay}>
                <div onClick={(e)=>{e.stopPropagation()}}>
                    <input autoComplete='off' className="universal-input" type='text' id='input-task' placeholder='Create a New Task' onKeyDown={(e)=>{if (e.key=='Enter'){addNewTask()}}}/>
                    <button className='set-button' onClick={addNewTask}>Create Task</button>
                    <button className='close-button' onClick={changeDisplay}>close</button>
                </div>
            </div>
            {/*--------------------- list ---------------------- */}
            <div className='list-container'>
            <button id='open-new-task' className='set-button' onClick={changeDisplay}>New Task</button>
                {/* TODO LIST---------------------- */}
                <TaskList
                name="toDo"
                id="todo-list"
                list={
                    <ul>
                        {taskList.map(task=>
                        (asignListTask(task,0)))}
                    </ul>
                }
                />
                {/* IN PROGRESS---------------------- */}
                <TaskList
                name="In progress"
                id="progress-list"
                list={
                    <ul>
                        {taskList.map(task=>
                        (asignListTask(task,1)))}
                    </ul>
                }
                />
                {/*COMPLETED---------------------- */}
                <TaskList
                name="Completed"
                id="Completed-list"
                list={
                    <ul>
                        {taskList.map(task=>
                        (asignListTask(task,2)))}
                    </ul>
                }
                />
                <button id='reset-all-task' className='close-button' onClick={resetAll}>reset all</button>
            </div>
            
            
        </div>
    );
}