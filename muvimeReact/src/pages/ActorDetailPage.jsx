import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import './ActorDetailPage.css'; // Stil dosyasını ekledik
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LegacyFooter from '../components/LegacyFooter';

const ActorDetailPage = () => {
  const [actorDetail, setActorDetail] = useState(null);
  
  const { actorId } = useParams();

  useEffect(() => {
    const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
    const apiUrl = `https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}&language=en-US&append_to_response=combined_credits`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setActorDetail(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }, [actorId]);

  if (!actorDetail) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />

      <div className="actor-detail-container">
        <div className="actor-detail-header">
          <img src={`https://image.tmdb.org/t/p/w300${actorDetail.profile_path}`} alt={`${actorDetail.name} Poster`} />
          <div className="actor-info">
            <h1 style={{marginBottom:'5%'}}>{actorDetail.name}</h1>
            <h2 style={{marginTop:'5%'}}>Biography</h2>
          <p>{actorDetail.biography}</p>
          </div>
        </div>


        <div className="actor-credits">
  <h2>Acting Credits</h2>
  <ul className="credit-list">
    {actorDetail.combined_credits.cast
      .sort((a, b) => new Date(b.release_date || b.first_air_date) - new Date(a.release_date || a.first_air_date))
      .map(credit => (
        <li key={credit.id} className="credit-item">
       <Link  to={`/MovieDetailPage/${credit.id}`}>
                <strong>{credit.title || credit.name}</strong> &nbsp;
              </Link>
               as {credit.character}         
               <span className="release-date">{credit.release_date || credit.first_air_date}</span>
        </li>
      ))}
  </ul>
</div>
      </div>

      <Footer />
      <LegacyFooter />
    </>
  );
};

export default ActorDetailPage;






