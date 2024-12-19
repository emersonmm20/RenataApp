export const TaskList=({name,id,list})=>{

    return (
        <div className="list" id={id}>
            <div className="list-name">{name}</div>
            {list}
        </div>
    )



}