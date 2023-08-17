// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick'; // react-slick kütüphanesini ekliyoruz
// import './MovieList.css';
// import 'slick-carousel/slick/slick.css'; // react-slick için gerekli CSS dosyalarını ekliyoruz
// import 'slick-carousel/slick/slick-theme.css';
// import { Link,useParams } from 'react-router-dom';


// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [visibleMovies, setVisibleMovies] = useState(6);
//   const [movieDurations, setMovieDurations] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // TMDB API'den film verilerini almak için API anahtarınızı buraya girin
//         const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
//         );

//         // API'den gelen verileri movies state'ine kaydedin
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error('Error fetching data from TMDB API:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   useEffect(() => {
//     const fetchDurations = async () => {
//       try {
//         const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
//         const durationsMap = {};
  
//         for (const movie of movies) {
//           const response = await axios.get(
//             `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`
//           );
//           durationsMap[movie.id] = response.data.runtime;
//         }
  
//         setMovieDurations(durationsMap);
//       } catch (error) {
//         console.error('Error fetching durations:', error);
//       }
//     };
  
//     fetchDurations();
//   }, [movies]); // "movies" state'i değiştiğinde yeniden çağrılır
  
//   const handleShowMore = () => {
//     // "More" butonuna tıklandığında, visibleMovies state'ini artırın
//     setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 6);
//   };

//   const settings = {
  
//     dots: false,
//     infinite: true,
//     slidesToShow: 6,
//     slidesToScroll: 6,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   //Movie.genre için
//   const [movieGenres, setMovieGenres] = useState({});
//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
//         );
  
//         const genresMap = {};
//         response.data.genres.forEach((genre) => {
//           genresMap[genre.id] = genre.name;
//         });
  
//         setMovieGenres(genresMap);
//       } catch (error) {
//         console.error('Error fetching genre data:', error);
//       }
//     };
  
//     fetchGenres();
//   }, []);
  


//   return (
//     <div className="container">
//       <div className="container">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <p style={{ fontSize: '40px', fontStyle: 'normal', fontWeight: '800', lineHeight: 'normal', margin: '0' }}>What's Popular</p>
//           <button  style={{ display: 'inline-flex', alignItems: 'flex-start' }} className='btn btn-light' onClick={handleShowMore}>More</button> 
//           {/* <button style={{ display: 'inline-flex', alignItems: 'flex-start' }} onClick={handleShowMore} className='moreButton'> More </button> */}
//         </div>
//         <Slider {...settings}>
//         {movies.slice(0, visibleMovies).map((movie) => (
//   <div className="col mt-2" key={movie.id}>
       
//     <div style={{ height: '386px', width: '196px', border: 'none' }} className="card mb-2 h-100">
//     <Link   style={{color: 'inherit',
//   textDecoration: 'none'}} to={`/MovieDetailPage/${movie.id}`}>
//       <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top-list" alt="" />
//       </Link>
//       <h5 className="card-title">{movie.title}</h5>
//       <p className="card-genre">
//         {movie.genre_ids.map((genreId) => (
//           <span key={genreId}>{movieGenres[genreId]}, </span>
//         ))}
//       </p>
//       <div>
//       {/* <p style={{ display: 'inline-block' }}  className='card-text3'>{movieDurations[movie.id]} min/</p> */}
//       <p style={{ display: 'inline-block' }} className='card-end'>
//           {Math.floor(movieDurations[movie.id] / 60)}h {movieDurations[movie.id] % 60}m /
//         </p>
//         <p style={{ display: 'inline-block' }} className="card-end">
//           {new Date(movie.release_date).getFullYear()}
//         </p>
        
//         <button className='ratingList'> {movie.vote_average.toFixed(2)}</button>


//       </div>
//     </div>

//   </div>
// ))}

//         </Slider>
//       </div>
//     </div>
//   );
// };
// export default MovieList;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // react-slick kütüphanesini ekliyoruz
import './MovieList.css';
import 'slick-carousel/slick/slick.css'; // react-slick için gerekli CSS dosyalarını ekliyoruz
import 'slick-carousel/slick/slick-theme.css';
import { Link,useParams } from 'react-router-dom';


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(6);
  const [movieDurations, setMovieDurations] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TMDB API'den film verilerini almak için API anahtarınızı buraya girin
        const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );

        // API'den gelen verileri movies state'ine kaydedin
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB API:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchDurations = async () => {
      try {
        const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
        const durationsMap = {};
  
        for (const movie of movies) {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`
          );
          durationsMap[movie.id] = response.data.runtime;
        }
  
        setMovieDurations(durationsMap);
      } catch (error) {
        console.error('Error fetching durations:', error);
      }
    };
  
    fetchDurations();
  }, [movies]); // "movies" state'i değiştiğinde yeniden çağrılır
  
  const handleShowMore = () => {
    // "More" butonuna tıklandığında, visibleMovies state'ini artırın
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
  //Movie.genre için
  const [movieGenres, setMovieGenres] = useState({});
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
  
        const genresMap = {};
        response.data.genres.forEach((genre) => {
          genresMap[genre.id] = genre.name;
        });
  
        setMovieGenres(genresMap);
      } catch (error) {
        console.error('Error fetching genre data:', error);
      }
    };
  
    fetchGenres();
  }, []);
  


  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p style={{ fontSize: '40px', fontStyle: 'normal', fontWeight: '800', lineHeight: 'normal', margin: '0' }}>What's Popular</p>
          <button  style={{ display: 'inline-flex', alignItems: 'flex-start' }} className='btn btn-light' onClick={handleShowMore}>More</button> 
          {/* <button style={{ display: 'inline-flex', alignItems: 'flex-start' }} onClick={handleShowMore} className='moreButton'> More </button> */}
        </div>
        <Slider {...settings}>
        {movies.slice(0, visibleMovies).map((movie) => (
  <div className="col mt-2" key={movie.id}>
       
    <div style={{ height: '386px', width: '196px', border: 'none' }} className="card mb-2 h-100">
    <Link   style={{color: 'inherit',
  textDecoration: 'none'}} to={`/MovieDetailPage/${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top-list" alt="" />
      </Link>
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-genre">
        {movie.genre_ids.map((genreId) => (
          <span key={genreId}>{movieGenres[genreId]}, </span>
        ))}
      </p>
      <div>
      {/* <p style={{ display: 'inline-block' }}  className='card-text3'>{movieDurations[movie.id]} min/</p> */}
      <p style={{ display: 'inline-block' }} className='card-end'>
          {Math.floor(movieDurations[movie.id] / 60)}h {movieDurations[movie.id] % 60}m /
        </p>
        <p style={{ display: 'inline-block' }} className="card-end">
          {new Date(movie.release_date).getFullYear()}
        </p>
        
        <button className='ratingList'> {movie.vote_average.toFixed(2)}</button>


      </div>
    </div>

  </div>
))}

        </Slider>
      </div>
    </div>
  );
};
export default MovieList;
