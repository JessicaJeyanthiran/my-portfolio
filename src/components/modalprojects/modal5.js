import React from 'react';
import '../modal/modal.css'

function Modal5({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className= 'titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <h1> CODING FLASHCARDS </h1>
            <p>This is a coding flashcard app where students can test their coding knowledge in an effective way.</p>
            <h2>Technologies:</h2>
            
                <p>JavaScript</p>
                <p>HTML + CSS + BootStrap</p>
                <p>MySQL</p>
                <p>Node.js + Express.js</p>
              
            <a href='https://github.com/jadejhagru/coding-flashcards.git' target="_blank"><h4>GitHub Repo Here</h4></a>
            <a href='https://project-2-jaws.herokuapp.com/' target="_blank"><h4> Deployed Website</h4></a>
        </div> 
    </div>
  )
}

export default Modal5;