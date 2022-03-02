import React from 'react';
import '../modal/modal.css'

function Modal3({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className= 'titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <h1> COVID NOW </h1>
            <p>Covid-Now is an application that provides Covid-19 information and latest Covid-19 news for the country that the user will enter in the search box.</p>
            <h2>Technologies:</h2>
            
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Bootstrap</p>
                <p>JQuery</p>
                <p>Third Party API</p>
                <p>Web Storage API</p>

              
            <a href='https://github.com/deepikabekal/covid-now-version2.git' target="_blank"><h4>GitHub Repo Here</h4></a>
            <a href='https://deepikabekal.github.io/covid-now-version2/' target="_blank"><h4> Deployed Website</h4></a>

        </div> 
    </div>
  )
}

export default Modal3;