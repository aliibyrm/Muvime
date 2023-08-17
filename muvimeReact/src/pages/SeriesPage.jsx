import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SeriesPage.css"; // Stil dosyanızı import edin veya düzenleyin
import Navbar from '../components/Navbar';
const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [seriesGenres, setSeriesGenres] = useState({});
  
  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const API_KEY = "79c51a2ee1ecd5ad9edbb3a779c4c767";
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
        );
        setSeries(response.data.results);
      } catch (error) {
        console.error("Error fetching series data:", error);
        setSeries([]);
      }
    };

    fetchSeries();
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = "79c51a2ee1ecd5ad9edbb3a779c4c767";
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`
        );

        const genresMap = {};
        response.data.genres.forEach((genre) => {
          genresMap[genre.id] = genre.name;
        });

        setSeriesGenres(genresMap);
      } catch (error) {
        console.error("Error fetching series genre data:", error);
      }
    };

    fetchGenres();
  }, []);


 
  return (
    <>  
    <Navbar/>
   <div className="series-page">
      <div className="container">
        <h1 className="series-page-title">Popular Series</h1>
        <div className="series-list">
          {series.map((serie, index) => (
            <div className="col mt-2" key={serie.id}>
              <Link to={`/SeriesDetailPage/${serie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                  alt=""
                  className="series-card-img"
                />
              </Link>
              <h2 className="series-card-title">{serie.name}</h2>
              <p className="series-card-genres">
                {serie.genre_ids.map((genreId) => (
                  <span key={genreId}>{seriesGenres[genreId]}, </span>
                ))}
              </p>
              <p className="series-card-release">{serie.first_air_date}</p>
              <p className="series-card-rating">{serie.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default SeriesPage;


