import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import watch from "../img/play-circle-fill.jpg";
import YoutubeModal from "./YoutubeModal.jsx";
import axios from 'axios';

const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';

const TvShowDetails = () => {
  const { seriesId } = useParams();
  const [tvShow, setTvShow] = useState({});
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    async function fetchTvShowDetails() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}&language=en-US`);
        const data = await response.json();
        setTvShow(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching TV show details:', error);
      }
    }

    fetchTvShowDetails();
  }, [seriesId]);

  if (loading) {
    return <p>Loading...</p>;
  }


  return (

    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w500${tvShow?.poster_path})`,
      }}
      className="detaykapsam"
    >
    <div className="detaykutu">
      <img
        src={`https://image.tmdb.org/t/p/w500${tvShow?.poster_path}`}
        alt="Now Streaming"
        className="card-img-top"
      />
            <div className="now-streaming-text">
      <img src={watch} alt=""/>
      Now Streaming
            <p className="watchNow">Watch Now</p>
    </div>


    </div>
    <div style={{ marginTop: "64px", marginLeft: "135px" }}>
      <h1 className="movieTitle">{tvShow?.name}</h1>
      <p className="movieDetail">
        {tvShow?.release_date} <br />
        {tvShow?.genres.map((genre) => genre.name).join(", ")} <br />
        {tvShow?.runtime} min
      </p>
      <p className="movieOverview">Overview</p>
      <p className="overviewText">{tvShow?.overview}</p>

      {/* <div style={{ marginTop: "64px" }} className="movieCrew grid-container">
        {movieCrew.slice(0, 9).map((crewMember, index) => (
          <div className="column grid-item" key={index}>
            <p>
              {crewMember.name} <br />
              {crewMember.job}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  </div>
  );
};

export default TvShowDetails;


