import React,{useState} from 'react'
import './Hero.css'
import Popup from './Popup/Popup'
import Signpop from './Signpop/Signpop'

const Hero = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSignVisible, setIsSignVisible] = useState(false);





  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleSign = () => {
    setIsSignVisible(!isSignVisible);
 }

  return (
    <div className='hero'>
        <div className='content'>

        <h1>LienCo Construction</h1> <br />
        <div className='line'></div>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4><br />
        
        <div className="btn">
           
        <button className='login' onClick={togglePopup}>Log in</button>
        <button className='signup' onClick={toggleSign} >Sign up</button>
        </div>
      
        <Popup isVisible={isPopupVisible} onClose={togglePopup} />
        <Signpop isSignVisible={isSignVisible} onClose={toggleSign} />
       
        </div>
      
    </div>
  )
}

export default Hero
