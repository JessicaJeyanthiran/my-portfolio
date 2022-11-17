import React from 'react';
import './navbar.css'
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className=' h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-md flex justify-between items-center px-4'>
        <h1 className=' font-burtons text-xl'>JJ</h1>
        <BsFillMoonStarsFill/>
    </nav>
  
  )
};

export default Navbar;
