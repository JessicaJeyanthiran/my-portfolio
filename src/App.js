import React, {useState} from 'react';
// import Navbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
// import Menu from "./components/menu";
import "./App.css"
import DarkMode from './components/darkmode';
import { BsFillMoonStarsFill } from "react-icons/bs";


function App() {
  
  return (
    
    <div>
      
      <nav className=' h-16 drop-shadow-lg flex justify-between items-center px-4'>
        <h1 className=' font-burtons text-xl'>JJ</h1>
        <ul className='flex items-center'>
          <li>         
<DarkMode/>            
          </li>
          <li>
            <button className="bg-[#fafafa] px-4 py-2 border-blue-500 border-2 text-blue-500 rounded-md ml-8 drop-shadow-md">
              <a  href="#">
              Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>


      <div className="sections">
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  
  );
}

export default App;
