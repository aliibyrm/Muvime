import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import "./SearchMovie.css";


const SearchMovie = () => {
  const { searchQuery } = useParams(); // Yönlendirme ile gelen searchQuery parametresini al
  console.log(searchQuery);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const API_KEY = "79c51a2ee1ecd5ad9edbb3a779c4c767";
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [searchQuery]);


  const [movieGenres, setMovieGenres] = useState({});
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = "79c51a2ee1ecd5ad9edbb3a779c4c767";
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );

        const genresMap = {};
        response.data.genres.forEach((genre) => {
          genresMap[genre.id] = genre.name;
        });

        setMovieGenres(genresMap);
      } catch (error) {
        console.error("Error fetching genre data:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div>
      <div style={{ marginTop: "64px" }} className="container">
        {/* <p className='searchResult'>Search Result</p>
          <p>{movies.length} records </p> */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p
            className="SearchResult"
            style={{
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            Search Result
          </p>
          <p> {movies.length} records </p>
          {/* <button style={{ display: 'inline-flex', alignItems: 'flex-start' }} onClick={handleShowMore} className='moreButton'> More </button> */}
        </div>
        <div className="movie-list">
          {movies.map((movie) => (
            <div className="col mt-2" key={movie.id}>
              <div
                style={{ height: "386px", width: "196px", border: "none" }}
                className="card mb-2 h-100"
              >
                 <Link   style={{color: 'inherit',
  textDecoration: 'none'}} to={`/MovieDetailPage/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top-list"
                  alt=""
                />
                </Link>

                <h5 className="card-text">{movie.title}</h5>
                <p className="card-tex2">
                  {movie.genre_ids.map((genreId) => (
                    <span key={genreId}>{movieGenres[genreId]}, </span>
                  ))}
                </p>
                <div>
                  {/* <p style={{ display: 'inline-block' }} className='card-text3'>
             {Math.floor(movieDurations[movie.id] / 60)}h {movieDurations[movie.id] % 60}m /
           </p> */}
                  <p style={{ display: "inline-block" }} className="card-text3">
                    {new Date(movie.release_date).getFullYear()}
                  </p>
                  <button className="ratingSearch">
                    {" "}
                    {(movie.vote_average).toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
