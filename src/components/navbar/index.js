import React from 'react';
// import './navbar.css'
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import logo from '../../assets/JJ.png'
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className=' bg-violet-600 py-10 mb-12 flex justify-between'>
        <h1 className=' font-burtons text-3xl'>jj</h1>
        <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill/>
            </li>
        </ul>
    </nav>
    // <div className=  {"navbar " + (menuOpen && "active")}>
    //     <div className='wrapper'>
    //         <div className="left">            
    //             <a href="#about" className='logo'><img src={require('../../assets/JJ.png')} alt=''/></a>
    //             <div className='itemContainer'>
    //                 <PersonOutlineIcon className='icon'/>
    //                 <span>(647)549-9943</span>
    //             </div>
    //             <div className='itemContainer'>
    //                 <MailOutlineIcon className='icon'/>
    //                 <span>jeyanthiran.jessica@gmail.com</span>
    //             </div>
    //             <div className='itemContainer'>
    //                 <a href='https://github.com/JessicaJeyanthiran' target='_blank'><GitHubIcon className='icon'/></a>
    //             </div>
    //             <div className='itemContainer'>
    //                 <a href='https://www.linkedin.com/in/jessicajeyanthiran/' target='_blank'><LinkedInIcon className='icon'/></a>
    //             </div>
    //         </div>
            
    //         <div className="right">
    //             <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
    //                 <span className="line1"></span>
    //                 <span className="line2"></span>
    //                 <span className="line3"></span>
    //             </div>           
    //         </div>
    //     </div>
    // </div>
  )
};

export default Navbar;
