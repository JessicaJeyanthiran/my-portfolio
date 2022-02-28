import React from 'react';
import './about.css'
import headshot from '../../assets/headshot2.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function About() {
  return (
    <div className='about' id='about'>
     <div className='left'>
       <div className='imgContainer'>
         <img src={require('../../assets/headshot2.png')} alt=''/>
       </div>
     </div>
     <div className='right'>
       <div className='wrapper'>
         <h2>Hello World! I'm</h2>
         <h1>Jessica Jeyanthiran</h1>
         <h3>Full Stack Web Developer</h3>
       </div>
       <a href="#portfolio">
         <KeyboardArrowDownIcon className='arrow'/>
       </a>

     </div>

    </div>
  )
};
  
  export default About;
  
  