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
            <p>I am a full-stack web developer with a recently earned certificate received from the University of Toronto. This coding bootcamp has equipped me with newly developed front end skills in HTML, CSS, Javascript, React.js, and responsive web development, as well as back end technologies such as Node, js, Express.js, MongoDB, MySQL.

            My background in Health Administration has allowed me to recognize my ambition to grow in knowledge, and the world of web development has certainly fulfilled that. I am a student by nature, and I am known for my desire to triage and trouble-shoot problems in both the clinic and in code. I worked on an agile team of four to develop a single-page MERN bidding web application. My goal is to bring awe to every user experience and share my passion with a team.</p>

        </div> 
    </div>
  )
}

export default Modal1;