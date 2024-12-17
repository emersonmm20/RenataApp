import logo from './logo.svg';
import {Statistics,Menu} from './components/tasks.js';
import {TODO} from './components/TODO.js'
import './App.css';
import { useState } from 'react';

function App() {
  const [menuActive,setMenuActive]= useState(false)

  const showMenu=()=>{

    const divMenu=document.getElementById("menu-container")
    // const divMenuChild=document.getElementById("menu")
    if (menuActive){
      divMenu.style.display="flex"
    }
    else{
      divMenu.style.display="none"
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
      <div id='menu-container' onClick={showMenu}>

        <Menu/>
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
