import React from 'react';
import '../modal/modal.css'

function Modal1({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className= 'titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <h1> RUN BUDDY </h1>
            <p>A professional mobile-friendly website that offers fitness training services for Run Buddy Inc.</p>
            <h2>Technologies:</h2>
            
                <p>HTML</p>
                <p>CSS</p>
              
            <a href='https://github.com/JessicaJeyanthiran/RunBuddy.git' target="_blank"><h4>GitHub Repo Here</h4></a>
            <a href='https://jessicajeyanthiran.github.io/RunBuddy/' target="_blank"><h4> Deployed Website</h4></a>


        </div> 
    </div>
  )
}

export default Modal1;