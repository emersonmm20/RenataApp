

export const Calc=()=>{
    const pressButon=(b)=>{
        return (0)

    }
    return (
        <div className="tool calc-container" onClick={(e)=>e.stopPropagation()}>
            <div id="display-calc">
                <input type="text" placeholder="0"/>
            </div>
            <div id="buttons-calc"></div>
        </div>
    )
}