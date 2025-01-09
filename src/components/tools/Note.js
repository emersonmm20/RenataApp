import { useState } from "react"


export const Note =()=>{
    const [noteList,setNote]=useState([])
    const [idNote,setIdNote]=useState(0)
    const addNote=()=>{
        const input=document.getElementById("note-input")

        setNote([...noteList,input.value])

        input.value=""

    }
    return (
        <div className="tool" onClick={(e)=>e.stopPropagation()}>
            <h2>Notes</h2>
            <div>
                <input autoComplete="off" type="text" className="universal-input" placeholder="Add Note" id="note-input" onKeyDown={(e)=>e.key=="Enter" ? addNote() : {}}/>
                <button onClick={addNote} className="set-button">Set Note</button>
                <button onClick={()=>setNote([])} className="close-button">Reset</button>

            </div>
            
            <ul>
                {noteList.map(note =>(
                    <li className='universal-list-element note'>{note}</li>
                ))}

            </ul>
        </div>
    )
}