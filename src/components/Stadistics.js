import { resetErrorsCount } from "ajv/dist/compile/errors"
import './stadistics.css'

export const Statistics = ({data})=>{

    // const newTask={
    //     "taskName":input.value,
    //     "status":0,
    //     "id":id}

    const dataCount=(n)=>{
        if(data==[]){
            return ""
        }
        let count= 0
        data.map(task=> {
            if(task.status ==n){
                count ++
            }
        })
        return count

    }
    const percent =()=>{
        const percent=((((dataCount(0)+dataCount(1))/data.length  )* 100-100).toFixed(2))*-1
        if(document.getElementById("percent")){
            const div=document.getElementById("percent").style

        if(dataCount(2)){
            if(dataCount(2)==data.length){
                div.background="lightgreen"
                div.color="#000"
                return 100
            }
            if(percent<50){
                div.background="orange"
                div.color="#000"
            }
            else if(percent>50 && percent<75){
                div.background="#00a841"
                div.color="#fff"
            }
            else{
                div.background="lightgreen"
                div.color="#000"
            }

            return percent

        }
        else{
            div.background="none"
            div.color="#000"
            return 0
        }
        }
        
    }


    return (
        <div className="stadistics">
            <p>Task to do: <span>{dataCount(0)}</span></p>
            <p>Task in progress: <span>{dataCount(1)}</span></p>
            <p>Task completed: <span>{dataCount(2)}</span></p>
            <p id="percent">{percent()}% completed</p>

        </div>
    )
}