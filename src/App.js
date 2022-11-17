import React, {useState} from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
// import Menu from "./components/menu";
import "./App.css"
// import Skills from './components/skills';


function App() {
  // const [menuOpen,setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      
      <Navbar />

      <div className="sections">
        <About />

        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
