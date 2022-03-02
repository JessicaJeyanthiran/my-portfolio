import React, {useState} from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Menu from "./components/menu";
import "./App.css"
import Skills from './components/skills';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>  
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
      <div className="sections">
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
