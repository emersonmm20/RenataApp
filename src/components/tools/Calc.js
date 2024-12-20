

export const Calc=()=>{
    const pressButon=(b)=>{
        return (0)

    }
    return (
        <div className="tool calc-container" onClick={(e)=>e.stopPropagation()}>
            <div id="calc">
                <div id="calc-input-div"><input type="text" placeholder="0"/></div>
                <ul id="calc-button">
                    <li><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button></li>
                    <li><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button></li>
                    <li><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button></li>
                    <li><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button></li>
                    <li><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button><button onClick={()=>pressButon(0)}>0</button></li>
                </ul>

            </div>
        </div>
    )
}