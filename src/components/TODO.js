import {useState} from 'react'
import { Statistics } from './Stadistics'
import './tasks.css'




export const TODO = ()=>{

    const [todo,setTodo]=useState([])
    const [viewLists,setViewLists]= useState(true)
    const [id,setId]=useState(0)

    const exportTasks=()=>{
        setViewLists(!viewLists)
        
        return 0
    }

    const importTask=(input)=>{
        console.log(JSON.parse(input))
        setTodo(JSON.parse(input))
    }

    const addNewTask=()=>{
        const input= document.getElementById("input-task")
        if(input.value==""){
            window.alert("the new task cannot be empty")
            return 0
        }
        if(input.value[0]=='['){
            importTask(input.value)
            input.value=""
            return 0
        }
        

        const newTask={
            "taskName":input.value,
            "status":0,
            "id":id}
        setTodo([...todo, newTask])
        input.value=""
        setId(id+1)
    }
    const resetTask=()=>setTodo([])

    const changeStatus=(task)=>{
        console.log(todo.type)
        const index=todo.indexOf(task)
        const newList=[...todo.slice(0,index),...todo.slice(index+1),{
            "taskName":task.taskName,
            "status":task.status+1,
            "id":task.id}]
        console.log(index)
        console.log(newList)
        setTodo(newList)
    }
    const deleteTask=(task)=>{
        console.log(todo.type)
        const index=todo.indexOf(task)
        const newList=[...todo.slice(0,index),...todo.slice(index+1)]
        console.log(index)
        console.log(newList)
        setTodo(newList)
    }
    const asign =(task,position)=>{

        if(task.status==position){
            return (
                <li id={"task-"+task.id} className='task'>
                    <p>{task.taskName}</p>
                    <div className='task-button'>
                        <button className='change-status-button'  onClick={()=>changeStatus(task)}>Move</button>
                        <button className='delete-button' onClick={()=>deleteTask(task)}>X</button>

                    </div>
                    
                    </li>
            )
        }
    }
    //IMPORT FUNCTIONS----------------------


    return (
        <div className='todo-lists-container'>
            <Statistics data={todo}/>
            <div className='input-container'>
                <input  autoComplete='off' type='text' placeholder='New task' id='input-task' onKeyDown={(e)=>{if(e.key==='Enter'){addNewTask()}}}/>
                <button className='change-status-button' onClick={()=>addNewTask()}>Add task</button>
                <button  id="reset-button" onClick={resetTask}>RESET TASK</button>
                <button  className='change-status-button' onClick={exportTasks}>Export</button>
            </div>
            {/* LIST-------------------------------------------*/}
            <div id='lists-container'>
                <div className="list" style={viewLists ? {display:"flex"} : {display:"none"}}  id='todoList'>
                    <h2>To do</h2>
                    <ul>
                        {todo.map(task=>asign(task,0))}
                    </ul>
                </div>
                <div className="list" id='progressList' style={viewLists ? {display:"flex"} : {display:"none"}}>
                    <h2>progress</h2>
                    <ul>
                        {todo.map(task=>asign(task,1))}
                    </ul>
                </div>
                <div className="list" id='Completed-list' style={viewLists ? {display:"flex"} : {display:"none"}}>
                    <h2>Completed</h2>
                    <ul>
                        {todo.map(task=>asign(task,2))}
                    </ul>
                </div>
                <div style={viewLists ? {display:"none"} : {display:"flex"}}>
                    <p>{JSON.stringify(todo)} <br/><br/> Save this text and paste in 'New Task' for call it</p>
                </div>
            </div>
        </div>
    )
}