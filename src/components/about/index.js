import React, {useState} from 'react';
// import './about.css'
import headshot from '../../assets/headshot2.png';
import Resume from '../../assets/JessicaJeyanthiranFullStackResume.pdf';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { spacing } from '@mui/system';
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
    
        <div className='text-center p-5'>

        

          <h2 className="text-4xl py-4 text-slate-600 font-medium font-burtons" >Jessica Jeyanthiran</h2>
          <h3 className='text-xl py-2'>Full Stack Web Developer.</h3>
          <p className="text-sm py-3 leading-8 text-slate-800">I am a full-stack web developer with a certificate earned from the University of Toronto. Equipped with front end skills in HTML, CSS, Javascript, React.js, and responsive web development, as well as back end technologies such as Node. js, Express.js, MongoDB, MySQL.</p>
        </div>
        <div className="text-3xl flex justify-center gap-16 py-2 text-slate-600 drop-shadow-lg">
          <AiFillLinkedin/>
          <AiFillGithub/>
          <AiFillMail/>
        </div>

        <div className="flex justify-center"> 
          <div className='absolute top-60 left-96 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000'>
          </div>
          <div className='absolute top-60 right-96 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob'>
          </div>
          <div className='absolute top-80 -bottom-60 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-4000'>
          </div>
        </div>


        <div className="mx-auto rounded-full relative mt-5 mb-10 md:h-50 md:w-60 drop-shadow-xl">
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
  
  