import React from 'react'
import './Contact.css/'

const Contact = () => {
  return (
    <div className='Contact'>
        <div className="Contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="Contact-section">
            <div className="Contact-left">
                <h1>Let's talk</h1>
                <p>I would love to hear from you.<br/> Just say hi on message box for any inquiry</p>
                <div className="Contact-details">
                    <div className="Contact-detail">
                        <i class="fa-solid fa-envelope"></i> <p>Mofagodlove143@gmail.com</p>
                    </div>
                    <div className="Contact-detail">
                        <i class="fa-solid fa-phone"></i> <p>+237 671 660 372</p>
                    </div>
                    <div className="Contact-detail">
                        <i class="fa-brands fa-linkedin"></i> <p>Godlove Mofa</p>
                    </div>
                </div>
            </div>
            <form className="Contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Your Message</label>
                <textarea rows='6' placeholder='Enter Your Message' name='message'></textarea>
                <button type='submit' className='Contact-submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact