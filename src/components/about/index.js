import React, {useState} from 'react';
import './about.css'
import headshot from '../../assets/headshot2.png';
import Resume from '../../assets/JessicaJeyanthiranFullStackResume.pdf';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { spacing } from '@mui/system';
import { touchRippleClasses } from '@mui/material';
import Modal from '../modal';

function About() {

  const[openModal, setOpenModal] = useState(false);

  // const buttons = document.querySelectorAll('a');
  // buttons.forEach(button => {
  //   button.addEventListener('click', function(e){
  //     let x = e.clientX - e.target.offsetLeft;
  //     let y = e.clientY - e.target.offsetTop;

  //     let ripples = document.createElement ('span');
  //     ripples.style.left = x + 'px';
  //     ripples.style.top = y + 'px';
  //     this.appendChild(ripples);
  //     ripples.className='span';
  //   })
  // })
  
  return (
    <div className='about' id='about'>
      {openModal && <Modal closeModal={setOpenModal}/>}

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
       

        <button 
          className='openModalBtn' 
          onClick={() => {
            setOpenModal(true);
        }}>
          Learn More!
        </button>

        <a href={Resume} download><button id='button'>Download Resume</button></a>
        <a href="#portfolio">
         <KeyboardArrowDownIcon className='arrow'/>
        </a>
      </div>
        
         
        
      

     

    </div>

    
  )


};
  
  export default About;
  
  