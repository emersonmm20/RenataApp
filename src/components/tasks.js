import { UserData } from "./menu"
import './menu.css'



export const Menu = ()=>{

    return (
        <div id="menu" onClick={(e)=>{e.stopPropagation()}}>
            <UserData name="User" userImg={require("../imgs/profile1.jpg")}/>
            <p>new update coming soon...</p>
        </div>
    )
}