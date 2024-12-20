import { Project,UserData } from "./menu"
import './menu.css'


export const Statistics = ({toBeDone,inProgress,completed})=>{
    return (
        <div className="stadistics">
            {/* <div className="circle"></div>
            <p>tasks to be done: <span id={ToBeDone}></span></p>
            <p>Tasks in progress: <span id={inProgress}></span></p>
            <p>Tasks completed: <span id={completed}></span></p> */}
        </div>
    )
}
export const Menu = ()=>{


    return (
        <div id="menu" onClick={(e)=>{e.stopPropagation()}}>
            <UserData name="Emerson" userImg={require("../imgs/profile1.jpg")}/>
            <div className="projects-contain">
                <div><p>Projects:</p><hr/></div>
                <div id="projects-list">
                    <Project name="Cambiar estados de las tareas en las listas 'Todo"/> {/*COMPONENTE EXTERNO "PROJECT"*/}
                    <Project name="realizar las subaplicaciones del menu"/>
                    <Project name="generar sistema de estadisticas"/>
                    <Project name="aprender e integrar nodejs (backend)"/>
                </div>
            </div>
        </div>
    )
}