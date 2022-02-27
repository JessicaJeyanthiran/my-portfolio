import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import "./app.css"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
