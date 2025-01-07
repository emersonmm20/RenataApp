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

    return (
        <div className="stadistics">
            <p>Task to do: <span>{dataCount(0)}</span></p>
            <p>Task in progress: <span>{dataCount(1)}</span></p>
            <p>Task completed: <span>{dataCount(2)}</span></p>
            <p id="percent">{percent()+ "%"}</p>

        </div>
    )
}