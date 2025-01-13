import { useState } from "react"
import { Button } from "./ButtonCalc"
import './calc.css'



export const Calc=()=>{
    const [display,setDisplay]=useState("0")
    const clean=()=>setDisplay("0")
    const del =()=>setDisplay(display.slice(0,display.length-1))
    const numbers="0123456789"
    const sign="/*-+="
    const pressButon=(b)=>{
        return (0)

    }
    const addChar=(c)=>{        
        if(display=="0"){
            setDisplay(c)
        }
        else{
            setDisplay(`${display}${c}`)
        }
        console.log()

    }


    return (
        <div className="tool" onClick={(e)=>e.stopPropagation()}>
            <div className="calc-container" >
                <div id="display-calc">
                    <p onKeyDown={(e)=>addChar(e.key)}>{display}</p>
                </div>
                <div id="buttons-calc">
                    {"789/456*123-=0.+".split('').map(n => <Button content={n} setDisplay={addChar}/>)}
                    
                </div>
                <button onClick={del}>Del</button>
                <button onClick={clean}>CLEAN</button>
            </div>

            </div>
            
    )
}