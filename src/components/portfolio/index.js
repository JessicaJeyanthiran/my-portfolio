import React, {useState} from 'react';
import './portfolio.css'
import project1 from '../../assets/runbuddy.png';
import project2 from '../../assets/taskinator.png';
import project3 from '../../assets/CovidNow.png';
import project4 from '../../assets/ohsnap.png';
import project5 from '../../assets/codingflashcards.jpg';
import Modal1 from '../modalprojects/modal1';
import Modal2 from '../modalprojects/modal2';
import Modal3 from '../modalprojects/modal3';
import Modal4 from '../modalprojects/modal4';
import Modal5 from '../modalprojects/modal5';



function Portfolio() {

  const[openModal, setOpenModal] = useState(false);
  const[openModal2, setOpenModal2] = useState(false);
  const[openModal3, setOpenModal3] = useState(false);
  const[openModal4, setOpenModal4] = useState(false);
  const[openModal5, setOpenModal5] = useState(false);




  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <div className='container'>
      
        <div className='item'>
          {openModal && <Modal1 closeModal={setOpenModal}/>}
          <h3>Run Buddy</h3>
          <button className='openModalBtn' onClick={() => {
              setOpenModal(true);
              }}>               
                <img src={require("../../assets/runbuddy.png")} alt="project1"/>
          </button>
        </div>

        <div className='item'>
          {openModal2 && <Modal2 closeModal={setOpenModal2}/>}
          <h3>Taskinator</h3>
          <button className='openModalBtn' onClick={() => {
              setOpenModal2(true);
              }}>               
              <img src={require("../../assets/taskinator.png")} alt="project2"/>        
          </button>
        </div>

        <div className='item'>
          {openModal3 && <Modal3 closeModal={setOpenModal3}/>}
          <h3>Covid Tracker</h3>
          <button className='openModalBtn' onClick={() => {
              setOpenModal3(true);
              }}>               
              <img src={require("../../assets/CovidNow.png")} alt="project3"/>  
          </button>
        </div>

        <div className='item'>
          {openModal4 && <Modal4 closeModal={setOpenModal4}/>}
          <h3>OH SNAP</h3>
          <button className='openModalBtn' onClick={() => {
              setOpenModal4(true);
              }}>               
              <img src={require("../../assets/ohsnap.png")} alt="project4"/>    
          </button>
        </div>

        <div className='item'>
          {openModal5 && <Modal5 closeModal={setOpenModal5}/>}
          <h3>Coding Flashcards</h3>
          <button className='openModalBtn' onClick={() => {
              setOpenModal5(true);
              }}>               
              <img src={require("../../assets/codingflashcards.jpg")} alt="project4"/>
          </button>
        </div>

      
      </div>
    </div>
  )
};


export default Portfolio;
