import React from 'react'
import './signpop.css'
const Signpop = ({isSignVisible, onClose}) => {
     if(!isSignVisible) return null;




  return (
    <div className='signpop-overlay' onClick={onClose}>
        <div className='signpop-container' onClick={(e) => e.stopPropagation()}>
            <div className='signpop-content'>
               
                <form>
                <span className="icon-close" onClick={onClose}>X</span>
                    <h1>Sign up</h1>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder='example' required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='example@email.com' required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='********' required />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder='********' required />
                    <div className='btn'>
                        <button type="submit" className='signpop-button1'>Sign up</button>
                       
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Signpop
