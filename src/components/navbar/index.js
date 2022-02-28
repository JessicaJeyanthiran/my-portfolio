import React from 'react';
import './navbar.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
        <div className='wrapper'>
            <div className="left">
                <a href="#about" className='logo'>JJ</a>
                <div className='itemContainer'>
                    <PersonOutlineIcon className='icon'/>
                    <span>(647)549-9943</span>
                </div>
                <div className='itemContainer'>
                    <MailOutlineIcon className='icon'/>
                    <span>jeyanthiran.jessica@gmail.com</span>
                </div>
            </div>
            
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>           
            </div>
        </div>
    </div>
  )
};

export default Navbar;
