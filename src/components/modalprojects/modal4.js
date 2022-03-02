import React from 'react';
import '../modal/modal.css'

function Modal4({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className= 'titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <h1> OH SNAP </h1>
            <p>OH SNAP is a SPA that uses React state, props, hooks, and reusable UI components to provide a simple, yet sleek platform to show of the client's photography skills</p>
            <h2>Technologies:</h2>
            
                <p>React.JS</p>
                

              
            <a href='https://github.com/JessicaJeyanthiran/oh-snap.git' target="_blank"><h4>GitHub Repo Here</h4></a>
            <a href='https://jessicajeyanthiran.github.io/oh-snap/' target="_blank"><h4> Deployed Website</h4></a>
        </div> 
    </div>
  )
}

export default Modal4;