

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import "./ContactUsPage.css"; 
import LegacyFooter from '../components/LegacyFooter';
import Footer from '../components/Footer';
const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Confirm dialog göster
    const confirmation = window.confirm('Are you sure you want to send this message?');
  
    if (confirmation) {
      // Burada iletişim formunun gönderilme işlemlerini gerçekleştirebilirsiniz
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Message:', message);
      
      // Formu gönderdikten sonra state'leri temizleyebilirsiniz
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };
  

  return (
    <>
      <Navbar />
      <div className='contactBaslik'> Contact Us</div>
      <div className='baslikAlt'>Any question or remarks? Just write us a message!</div>
      <div style={{marginRight:'5%'}}>

        <form  className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
      <LegacyFooter/>
    </>
  );
}

export default ContactUsPage;
