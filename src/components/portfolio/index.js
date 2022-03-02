import React, {useState} from 'react';
import './portfolio.css'
import project1 from '../../assets/runbuddy.png';
import project2 from '../../assets/taskinator.png';
import project3 from '../../assets/CovidNow.png';
import project4 from '../../assets/ohsnap.png';
import project5 from '../../assets/codingflashcards.jpg';
import Modal1 from '../modalprojects';


function Portfolio() {

  const[openModal, setOpenModal] = useState(false);

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
            <a href='https://jessicajeyanthiran.github.io/taskinator/'><img src={require("../../assets/taskinator.png")} alt="project2"/></a>
            <h3>Taskinator</h3>
        </div>
        <div className='item'>
            <a href="https://deepikabekal.github.io/covid-now-version2/"><img src={require("../../assets/CovidNow.png")} alt="project3"/></a>
            <h3>Covid Tracker</h3>
        </div>
        <div className='item'>
            <a href='https://jessicajeyanthiran.github.io/oh-snap/'><img src={require("../../assets/ohsnap.png")} alt="project4"/></a>
            <h3>Oh Snap</h3>
        </div>
        <div className="item">
            <a href="https://github.com/jadejhagru/coding-flashcards.git"><img src={require("../../assets/codingflashcards.jpg")} alt="project4"/></a>
            <h3>Coding Flashcards</h3>
        </div>
      </div>
    </div>
  )
};


export default Portfolio;
