import React from 'react'
import './Contact.css/'

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "abb298e6-c135-4e3f-8def-1a5bebc881e1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='Contact'>
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
            <form onSubmit={onSubmit} className="Contact-right">
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