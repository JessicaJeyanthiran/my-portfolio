import React, {useState, useEffect} from 'react';
import './navbar.css'
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
    <nav className=' h-16 bg-[#fafafa] dark:bg-slate-900 dark:text-white drop-shadow-lg flex justify-between items-center px-4'>
        <h1 className=' font-burtons text-xl'>JJ</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-xl" /> 
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
    </div>
  
  )
};

export default Navbar;
