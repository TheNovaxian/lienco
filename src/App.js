import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Assessment from './Components/Assessment';         
import Contact from './Components/Contact';



function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Hero isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      <About/>
      <Assessment/>
      <Contact/>
    </div>
  );
}

export default App;
