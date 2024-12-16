import logo from './logo.svg';
import {TODO,Statistics,Menu} from './components/tasks.js';
import './App.css';
import { useState } from 'react';

function App() {

  const [menuActive,setMenuActive]= useState(false)

  const showMenu=()=>{
    if (menuActive){
      document.getElementById("menu-container").style.display="flex"

    }
    else{
      document.getElementById("menu-container").style.display="none"
    }
    setMenuActive(!menuActive)

  }

  

  return (
    <div className="App">
      {/* ___________________Header_____________________ */}
      <div className='header'>
        <div className='header-left'>
          <button onClick={showMenu} className='show-menu-button'><img src={require('./icons/menu.png')}/></button>
          <h1>Renata</h1>
        </div>
        <div className='header-rigth'>
          <ul>
            <li className='header-option'><button>calculator</button></li>
            <li className='header-option'><button>note</button></li>
          </ul>
        </div>
      </div>
      {/* ___________________MENU_____________________ */}
      <div id='menu-container'>

        <Menu/>
        <button onClick={showMenu}><img src={require('./icons/close.png')} /></button>
      </div>
      {/* ___________________MENU_____________________ */}
      <div className='view'>
      <Statistics/>
      <TODO />
      </div>
      
      
    </div>
  );
}

export default App;
