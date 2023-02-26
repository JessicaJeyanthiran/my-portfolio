import React, {useState} from 'react';
import Navbar from '../navbar';
import headshot from '../../assets/headshot2.png';
import Resume from '../../assets/JessicaJeyanthiranFullStackResume.pdf';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

function About() {


  return (
<div >
    
    <div>
     


    
        <div className='text-center p-5'>

        

          <h2 className="text-4xl py-3 font-medium  font-burtons md:text-5xl" >Jessica Jeyanthiran</h2>
          <h3 className='text-xl py-1 md:text-2xl'>Full Stack Web Developer.</h3>
          <p className="text-sm py-2 leading-8 md:text-xl max-w-5xl mx-auto">I am a full-stack web developer with a certificate earned from the University of Toronto. Equipped with front end skills in HTML, CSS, Javascript, React.js, and responsive web development, as well as back end technologies such as Node. js, Express.js, MongoDB, MySQL.</p>
        </div>
        <div className="text-3xl flex justify-center gap-16 py-1 text-slate-500 drop-shadow-lg ">
          <a href='https://github.com/JessicaJeyanthiran' className='cursor-pointer' target='_blank'><AiFillGithub/></a>
          <a href='https://www.linkedin.com/in/jessicajeyanthiran/' className='cursor-pointer' target='_blank'><AiFillLinkedin/></a>

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
       
  

    </div>
    </div>

  
  )


};
  
  export default About;
  
  