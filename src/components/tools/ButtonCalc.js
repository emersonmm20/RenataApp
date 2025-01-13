
export const Button=({content,setDisplay})=>{
    return(
        <button className="calc-button" onClick={()=>setDisplay(content)}>{content}</button>
    )


}