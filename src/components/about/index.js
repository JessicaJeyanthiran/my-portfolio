import React, {useState} from 'react';
// import './about.css'
import headshot from '../../assets/headshot2.png';
import Resume from '../../assets/JessicaJeyanthiranFullStackResume.pdf';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { spacing } from '@mui/system';
import { touchRippleClasses } from '@mui/material';
import Modal from '../modal';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

function About() {

  // const[openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* {openModal && <Modal closeModal={setOpenModal}/>} */}

     {/* <div className='left'>
       <div className='imgContainer'>
         <img src={require('../../assets/headshot2.png')} alt=''/>
       </div>
     </div> */}
    
        <div className='text-center p-10'>
          <h2 className="text-5xl py-2 text-slate-600 font-medium" >Jessica Jeyanthiran</h2>
          <h3 className='text-2xl py-2'>Full Stack Web Developer.</h3>
          <p className="text-md py-5 leading-8 text-slate-800">I am a full-stack web developer with a certificate earned from the University of Toronto. This coding bootcamp has equipped me with newly developed front end skills in HTML, CSS, Javascript, React.js, and responsive web development, as well as back end technologies such as Node. js, Express.js, MongoDB, MySQL.</p></div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-slate-600">
          <AiFillLinkedin/>
          <AiFillGithub/>
          <AiFillMail/>
        </div>
        <div className="mx-auto rounded-full w-80 h-80 relative mt-20 mb-10 md:h-96 md:w-96">
        <img src={require('../../assets/headshot2.png')} alt=''/>
        </div>
       
{/* 
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
        </a> */}
      
        
         
        
      

     

    </div>

  
  )


};
  
  export default About;
  
  