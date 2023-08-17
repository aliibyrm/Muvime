import React from 'react'
import Navbar from '../components/Navbar';
import movie from '../img/AboutUs.jpeg'
import "./AboutUsPage.css"; // Stil dosyanızı import edin veya düzenleyin
import LegacyFooter from '../components/LegacyFooter';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <>
    <Navbar/>
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${movie})`,
      }}
      className="detaykapsam"
    >
 
        <div className='baslik'>About Us
        <div className='aciklama'>We are The Best Movie Company</div>
        <div className='yazi'>Welcome to our movie website! We're thrilled to have you here and share our passion for cinema. Our team is dedicated to providing you with the latest information, news, reviews, and insights about all things related to movies. <br />

Our journey began with a simple idea: to create a platform where movie enthusiasts can come together to discuss, explore, and celebrate the magic of storytelling through films. Whether you're a casual viewer or a dedicated cinephile, you'll find something here that resonates with your love for the big screen. </div>
        <button className='moreAbout'>More About Us</button>
       
        </div>
    
  
      
        </div>
        <Footer/>
        <LegacyFooter/>

    </>
  )
}

export default AboutUsPage