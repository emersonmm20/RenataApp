import {Statistics,Menu} from './components/tasks.js';
import {TODO} from './components/TODO.js'
import './App.css';
import { useState } from 'react';
import {Calc,Note,RuleOfThree} from './components/tools'
import './components/tools/tool.css'




function App() {
  const [menuActive,setMenuActive]= useState(false)

  const [tool,setTool]=useState(<Calc/>)
  const [showTool,setShowTool]=useState(false)
  const displayTool=()=>setShowTool(!showTool)



  const selectTool=(tool)=>{

    return (0)
  }

  return (
    <div className="App">
      {/* ___________________Header_____________________ */}
      <div className='header'>
        <div className='header-left'>
          <button onClick={()=>setMenuActive(!menuActive)} className='show-menu-button'><img src={require('./icons/menu.png')}/></button>
          <h1 style={{userSelect:"none"}}>Renata</h1>
        </div>
        <div className='header-rigth'>
          <ul>
            <li className='header-option' onClick={displayTool}><button onClick={()=>setTool(<Calc/>)}>calculator</button></li>
            <li className='header-option' onClick={displayTool}><button onClick={()=>setTool(<Note/>)}>note</button></li>
            <li className='header-option' onClick={displayTool}><button onClick={()=>setTool(<RuleOfThree/>)}>rule of three</button></li>
            
          </ul>
        </div>
      </div>
      {/* ___________________MENU_____________________ */}
      <div id='menu-container' onClick={()=>setMenuActive(!menuActive)} style={menuActive ? {display:"flex"} : {display:"none"}}>

        <Menu/>
      </div>
      {/* ___________________TOOOOL_____________________ */}
      <div id='tool-container' onClick={displayTool} style={showTool ? {display:"flex"} : {display:"none"}}>
        {tool}
      </div>
      {/* ___________________view_____________________ */}
      <div className='view'>
      <Statistics/>
      <TODO />
      </div>
      
    </div>
  );
}

export default App;
