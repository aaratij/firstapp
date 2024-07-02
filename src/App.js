import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Media from "./components/Media";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About me</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/media" className="nav-item">Media</Link>
        <Link to="/calculator" className="nav-item">Calculator</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/about-me" element={ <AboutMe/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/media" element={ <Media/>}/>
        <Route path="/calculator" element={ <Calculator/>}/>
      </Routes>
    </div>
  );
}

export default App;