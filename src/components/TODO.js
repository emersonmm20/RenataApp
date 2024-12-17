import {useState} from 'react'
import './tasks.css'




export const TODO = ()=>{

    const [todo,setTodo]=useState([])

    const [display,setDisplay]=useState(false)

    const changeDisplay=()=>{

        const divList =document.getElementById("list-container").style
        const divInput=document.getElementById("div-input").style

        if(display){
            divList.display="none"
            divInput.display="flex"
        }
        else{
            divList.display="flex"
            divInput.display="none"
        }

        setDisplay(!display)
    
    }


    return (
        <div className="todo-list">
            <button id='open-new-task' onClick={changeDisplay}>New Task</button>
            {/* NEW TASK------------------------------- */}
            <div className='input' id='div-input'>
                <div>
                    <input type='text' id='input' placeholder='New task'/>
                    <button id='send-task'></button>
                </div>
            </div>
            {/*--------------------- list ---------------------- */}
            <div className='list-container'>
                {/* TODO LIST---------------------- */}
                <div className='list' id='TODO'>

                </div>
                {/* IN PROGRESS---------------------- */}
                <div className='list' id='inProgress'>

                </div>
                {/*COMPLETED---------------------- */}
                <div className='list' id='completed'>

                </div>
            </div>
            
            
        </div>
    );
}