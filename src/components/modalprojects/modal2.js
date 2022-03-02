import React from 'react';
import '../modal/modal.css'

function Modal2({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className= 'titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <h1> TASKINATOR </h1>
            <p>A dynamic interactive task-tracking web application. Taskinator allows you to create and organize your personal to do list. This application permits editing and deletion of tasks, as well as updating tasks' status with a drop down menu.</p>
            <h2>Technologies:</h2>
            
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>DOM API</p>
                <p>Web Storage API</p>

              
            <a href='https://github.com/JessicaJeyanthiran/taskinator.git' target="_blank"><h4>GitHub Repo Here</h4></a>
            <a href='https://jessicajeyanthiran.github.io/taskinator/' target="_blank"><h4> Deployed Website</h4></a>

        </div> 
    </div>
  )
}

export default Modal2;