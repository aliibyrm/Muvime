import React from 'react';
import './Footer.css';
import facebook from "../img/facebook.jpg";
import instagram from "../img/instagram.jpg";
import twitter from "../img/twitter.jpg";
import youtube from "../img/youtube.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div  className="col-lg-3 col-md-6 col-sm-12">
          <div  className="footer-item">
            <h5><b>THE BASICS</b></h5>
            <p>About TMDB <br />
              Contact Us <br />
              Support Forums <br />
              API <br />
              System Status</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div style={{marginLeft:'184px'}} className="footer-item">
            <h5><b>GET INVOLVED</b></h5>
            <p>Contribution Bible <br />
              3rd Party Applications <br />
              Add New Movie <br />
              Add New TV Show</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div style={{marginLeft:'201px'}} className="footer-item">
            <h5><b>COMMUNITY</b></h5>
            <p>Guidelines <br />
              Discussions <br />
              Leaderboard <br />
              Twitter</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="footer-item">
            <h5 style={{marginRight:"73px"}}><b>SOCIAL</b></h5>
            {/* Sosyal medya simgeleri veya bağlantıları buraya eklenebilir */}
            <img   className="social-icon" src={facebook} alt="Facebook" />
            <img  className="social-icon" src={instagram} alt="Instagram" />
            <img  className="social-icon" src={twitter} alt="Twitter" />
            <img style={{marginRight:'73px'}} className="social-icon" src={youtube} alt="YouTube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
