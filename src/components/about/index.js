import React from 'react';
import './about.css'
import headshot from '../../assets/headshot2.png';
import Resume from '../../assets/JessicaJeyanthiranFullStackResume.pdf';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { spacing } from '@mui/system';
import { touchRippleClasses } from '@mui/material';

function About() {

  // const buttons = document.querySelectorAll('a');
  // buttons.forEach(button => {
  //   button.addEventListener('click', function(e){
  //     let x = e.clientX - e.target.offsetLeft;
  //     let y = e.clientY - e.target.offsetTop;

  //     let ripples = document.createElement ('span');
  //     touchRippleClasses.setAttribute('className', 'span');
  //     ripples.style.left = x + 'px';
  //     ripples.style.top = y + 'px';
  //     this.appendChild(ripples);
  //   })
  // })
  
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
        <button id='button'>Learn More!</button><a href={Resume} download><button id='button'>Download Resume</button></a>

         <a href="#portfolio">
         <KeyboardArrowDownIcon className='arrow'/>
       </a>
      </div>
        
         
        
      

     

    </div>

    
  )


};
  
  export default About;
  
  