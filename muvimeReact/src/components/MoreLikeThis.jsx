import React, { useState, useEffect } from "react";
import "./MoreLikeThis.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Slider ekledik
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoreLikeThis = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState({});
  const [visibleMovies, setVisibleMovies] = useState(6); // Görünen film sayısını state olarak ekledik

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        const apiKey = "79c51a2ee1ecd5ad9edbb3a779c4c767";
        const response = await axios.get(
           `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=YOUR_GENRE_ID`

        );
        setSimilarMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      }
    };

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

    fetchSimilarMovies();
    fetchGenres();
  }, []);

  const handleShowMore = () => {
    // "More" butonuna tıklandığında görünen film sayısını artırın
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 6);
    
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginTop: "64px" }} className="container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p
            style={{
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            More Like This
          </p>
          <button
            style={{ display: "inline-flex", alignItems: "flex-start" }}
            className="btn btn-light"
            onClick={handleShowMore} // More düğmesine tıklandığında handleShowMore fonksiyonunu çağırın
          >
            More
          </button>
        </div>
        <Slider {...settings}> {/* Slider bileşenini ekledik */}
          {similarMovies.slice(0, visibleMovies).map((movie) => (
            // Film kartlarını burada oluşturun
<div className="col mt-2" key={movie.id}>
{/* <div style={{ height: '386px', width: '196px', border: 'none' }} className="movie mb-2 h-100">
<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="movie-img-top" alt="" />
<h5 className="movie-text">{movie.title}</h5>
{/* <p className="movie-tex2">{movie.genre}</p>
<div>
<p style={{ display: 'inline-block' }} className="movie-text3">1h / 2013</p>
<p style={{ display: 'inline-block', backgroundColor: '#000', borderRadius: '3px', color: '#FFF', fontSize: '8px', fontWeight: '700', lineHeight: 'normal', fontStyle: 'normal' }}>86.0</p>
</div> 
</div> */}
<div
  style={{ height: "386px", width: "196px", border: "none" }}
  className="card mb-2 h-100"
>
  <Link
    style={{ color: "inherit", textDecoration: "none" }}
    to={`/MovieDetailPage/${movie.id}`}
  >
    <img
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      className="card-img-top-list"
      alt=""
      
    />
  </Link>

  <h5 className="card-title">{movie.title}</h5>
  <p className="card-genre">
    {movie.genre_ids.map((genreId) => (
      <span key={genreId}>{movieGenres[genreId]}, </span>
    ))}
  </p>
  <div>
    {/* <p style={{ display: 'inline-block' }}  className='card-text3'>{movieDurations[movie.id]} min/</p> */}
    {/* <p style={{ display: 'inline-block' }} className='card-end'>
{Math.floor(movieDurations[movie.id] / 60)}h {movieDurations[movie.id] % 60}m /
</p> */}
    <p style={{ display: "inline-block" }} className="card-end">
      {new Date(movie.release_date).getFullYear()}
    </p>

    <button className="ratingList"> {movie.vote_average}</button>
  </div>
</div>
</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MoreLikeThis;

