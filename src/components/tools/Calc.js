import { useState } from "react"
import { Button } from "./ButtonCalc"
import './calc.css'




export const Calc=()=>{
    const [display,setDisplay]=useState("0")
    const clean=()=>{
        document.getElementById("display-calc-number").style.fontSize="24px" 
        setDisplay("0")
    }
    // const [result,setResult]=useState(0)
    const del =()=>setDisplay(display.slice(0,display.length-1))
    const numbers="0123456789"
    const sign="/*-+=".split('')

    const calculate=(num1,sign,num2)=>{

    }

    const updateResult=(lastChar)=>{
        
        if(lastChar=="="){
            
        
            setDisplay(`${eval(display)}`)
        }
        else if(sign.indexOf(lastChar)>=0){
            console.log(`${eval(display)}`)
        }


    }
    const addChar=(c)=>{
        const p=document.getElementById("display-calc-number")

        if(display=="0"){
            if(sign.indexOf(c)>=0 && c!= "-"){
                return 0
            }
            setDisplay(c)
        }
        
        else{
            
            if(sign.indexOf(c)!=-1 && sign.indexOf(display[display.length-1])!= -1){
                setDisplay(`${display.slice(0,display.length -1 )}${c}`)
                updateResult(c)
                return 0
            }
            setDisplay(`${display}${c}`)
        }
        if(display.length>25){
            p.style.fontSize="16px"
        }
        else{
            p.style.fontSize="24px"
        }
        console.log()
        updateResult(c)

    }


    return (
        <div className="tool" onClick={(e)=>e.stopPropagation()}>
            <div className="calc-container" >
                <div id="display-calc">
                    <p id="display-calc-number">{display}</p>
                </div>
                <div id="buttons-calc">
                    {"789/456*123-=0.+".split('').map(n => <Button content={n} setDisplay={addChar}/>)}
                    
                </div>
                <div className="button-calc">
                <button className="button-bottom-calc del" onClick={del}>Del</button>
                <button className="button-bottom-calc clean" onClick={clean}>CLEAN</button>
                </div>
                
            </div>

            </div>
            
    )
}

