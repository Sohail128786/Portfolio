import './App.css';
import React from "react";
import Header from './Nav/Header';
// import Home from './Nav/Home';
// import Contact from './Nav/CV';
// import About from './Nav/Cover letter';
// import { Routes, Route } from "react-router-dom";
// import Header from './Header';
import Footer from './Nav/Footer';


function App() {
  
  return (  
    <div className='main'>
       <Header />
       <Footer/>
    </div>
  );
}

export default App;

        /* <img src={logo} className="App-logo" alt="logo" /> */