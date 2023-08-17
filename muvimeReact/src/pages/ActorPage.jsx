
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LegacyFooter from '../components/LegacyFooter';
import './ActorPage.css'; 
import { Link } from 'react-router-dom';


const ActorPage = () => {
  const [popularActors, setPopularActors] = useState([]);

  useEffect(() => {
  
    const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
    const apiUrl = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // setPopularActors(data.results);
        const sortedActors = data.results.sort((a, b) => b.popularity - a.popularity);
        setPopularActors(sortedActors);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{marginTop:'5%'}}>Popüler Oyuncular</h1>
      <div className="actors-container">
  {/* {popularActors.map(actor => ( */}
  {popularActors.slice(0, 16).map(actor => (


    <div key={actor.id} className="actor-card">
                <Link  key={actor.id} to={`/actors/${actor.id}`}>
      <img className='imgActor' src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={`${actor.name} Poster`} />
      </Link>
      <h3>{actor.name}</h3>
      <p>{actor.popularity}</p>
    </div>
  

  ))}
</div>
      <Footer />
      <LegacyFooter />
    </>
  );
};

export default ActorPage;


