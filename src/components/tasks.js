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
                    <Project name="buscar cualquier cosa"/> {/*COMPONENTE EXTERNO "PROJECT"*/}
                    <Project name="realizar las 3 listas 'ToDo list'"/>
                    <Project name="Mejorar la pagina"/>
                    <Project name="crear un icono o imagen para la app"/>
                </div>
            </div>
        </div>
    )
}