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

  return (
    <section className=" text-center p-10 py-10">
      <div>
        <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className="basis-1/4 flex-1 ">
          <img src={project1} className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"/>
        </div>
        <div className="basis-1/4 flex-1">
          <img src={project2} className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"/>
        </div>
        <div className="basis-1/4 flex-1">
          <img src={project3} className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"/>
        </div>
        <div className="basis-1/4 flex-1">
          <img src={project4} className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"/>
        </div>
        <div className="basis-1/4 flex-1">
          <img src={project5} className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"/>
        </div>
      </div>
     
    </section>
  

  )
};


export default Portfolio;
