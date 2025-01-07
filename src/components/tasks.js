import { Project,UserData } from "./menu"
import './menu.css'



export const Menu = ()=>{

    return (
        <div id="menu" onClick={(e)=>{e.stopPropagation()}}>
            <UserData name="Emerson" userImg={require("../imgs/profile1.jpg")}/>
            <div className="projects-contain">
                <div><p>Projects:</p><hr/></div>
                <div id="projects-list">
                    <Project name="Cambiar estados de las tareas en las listas 'Todo'"/>
                    <Project name="guardar lista de tareas definidad por el usuario y call back"/> {/*COMPONENTE EXTERNO "PROJECT"*/}
                    <Project name="realizar las subaplicaciones del menu"/>
                    <Project name="establecer fechas a las task"/>
                    <Project name="generar sistema de estadisticas"/>
                    <Project name="Que cada nota tenga un titulo/nombre"/>
                    <Project name="aprender e integrar nodejs (backend)"/>
                </div>
            </div>
        </div>
    )
}