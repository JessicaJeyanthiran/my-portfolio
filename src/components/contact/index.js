import React, { useState } from 'react';
import './contact.css'
import contact from "../../assets/contactme.jpg"

function Contact() {

  const [message,setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <h2> Contact Me.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span> Thanks! I'll reply ASAP</span>}
        </form>
      </div>
      <div className='right'>
        
      </div>

    </div>
  )
};

export default Contact
