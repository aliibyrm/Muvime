import React, { useState } from 'react';
import './navbar.css';
import person from "../img/serkanKonakci.jpg";
import Actor from '../pages/ActorPage'; // ActorPage component'inin yolunu doğru şekilde ayarlayın
import { Link } from 'react-router-dom';

const Navbar = () => {


  const [language, setLanguage] = useState('tr'); // Başlangıçta Türkçe olarak varsayalım

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);

  };


  return (
    <div className='container-fluid'>
    <nav style={{ backgroundColor: "#FFF" }} className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">MUVIME</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      {/* style={{ marginLeft: "400px" }} */}
        <div  className="navbar-nav">
          <a style={{ color: "#000" }} className="nav-item nav-link" href="#">{language === 'tr' ? 'Filmler' : 'Movies' }</a>
          <Link to="/series" style={{ color: "#000", marginLeft: '30px' }} className="nav-item nav-link">
            {language === 'tr' ? 'Diziler' : 'Series'}
          </Link>
          {/* <a style={{ color: "#000",marginLeft:'28px' }} className="nav-item nav-link" href="#">{language === 'tr' ? 'Kişiler' : 'Persons' }</a> */}
          <Link to="/Actor" style={{ color: "#000", marginLeft: '28px' }} className="nav-item nav-link">
            {language === 'tr' ? 'Kişiler' : 'Persons'}
          </Link>
          <div className="dropdown">
            <button style={{ color: "#000",marginLeft:'28px' }} className="btn dropdown-toggle" data-toggle="dropdown">{language === 'tr' ? 'Daha Fazla' : 'More' }</button>
            <div className="dropdown-menu">
              <a href="/about" className="dropdown-item">{language === 'tr' ? 'Hakkımızda' : 'About Us' }</a>
              <a href="/contact" className="dropdown-item">{language === 'tr' ? 'İletişim' : 'Contact Us' }</a>
           
            </div>
          </div>
        </div>
      </div>
      <Link style={{color: 'inherit',
  textDecoration: 'none'}} to="/ProfileDetail" >
         <div className='person-info'>
        <button style={{marginRight:'21px'}} className='EN' onClick={() => handleLanguageChange('en')}>EN</button>
        <div style={{ fontSize: "x-small", whiteSpace: "nowrap" }} className="person-name">
          {language === 'tr' ? 'Serkan Konakcı' : 'Serkan Konakci'}
          <br /> 
          FrontEnd {language === 'tr' ? 'Geliştirici' : 'Developer'}
          
        </div>
        <div className="person-image">
          <img src={person} alt="Person" />
        </div>
      </div> 
      </Link> 
    </nav>
    </div>
  );
}

export default Navbar;

