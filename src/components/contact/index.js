import React, { useState } from 'react';
import './contact.css'
import contact from "../../assets/contactme.jpg"
import emailjs from '@emailjs/browser';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Contact() {

  const [message,setMessage] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_24o0lbf', 'template_zoxxobh', e.target, 'Z6bjTck_CHVeuniCI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setMessage(true);
  };

// hide success message
setTimeout(() => {
  setMessage(false)
}, 4000);

  return (
    <div className='contact' id='contact'>
      <a href="#about">
        <KeyboardArrowUpIcon className='arrowUp'/>
        </a>
        
        
        <h2> Contact Me.</h2>
        
  <form onSubmit={handleSubmit, sendEmail}>
          <input type="text" placeholder="Email" name='email'></input>
          <textarea placeholder='Message' name='message'></textarea>
          <button type='submit'>Send</button>
          {message && <span> Thanks! I'll reply ASAP</span>}
        </form> 
    

    </div>
  )
};

export default Contact
