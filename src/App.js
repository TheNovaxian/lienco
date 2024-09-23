import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Assessment from './Components/Assessment';         
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Assessment/>
      <Contact/>
    </div>
  );
}

export default App;
