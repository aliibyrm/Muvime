import React from 'react';
import './description.css';
import { useNavigate } from 'react-router-dom'; // useNavigate kullanıldı

const Description = () => {
  const handlePremiumClick = () => {
    navigate('/Premium'); // Premium sayfasına yönlendirme işlemi
  };
  const navigate = useNavigate();
  return (
    <div style={{marginBottom:'76px'}} className='container'> 
    
    <div style={{marginTop:'64px'}} className="container mt-4">
      <div className="description">
        <button id='getPremium' className="btn btn-primary btn-lg d-block mx-auto mb-3" style={{ maxWidth: '200px', background: '#02B2E3' }}   onClick={handlePremiumClick}>Get Premium</button>
        <p id='tmdbAdvantage' className="text-muted text-center">The TMDB Advantage</p>
        <h2 id='h2' className="text-center">Millions of movies, TV shows and people to discover. Explore now.</h2>
        <h6 id='h6' className="text-center">The Movie Database (TMDB) is a community-built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data are largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community, and that's precisely what makes us different.</h6>
      </div>
    </div>
    </div>
  );
};

export default Description;
