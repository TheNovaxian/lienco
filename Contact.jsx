import React from 'react'
import './Contact.css'  
import Back from './Images/lienco3.png'
import ic from './Images/tt.jpg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='content'>
          
          <form>
           
            <img src={Back} alt='back' />
            <h1>Contact Us</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='John Doe' required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='example@email.com' required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder='Write your message here...' required />
            <div className='btn2'>
              <button >Submit</button>
            </div>
          </form>
          </div>
    </div>
  )
}

export default Contact
