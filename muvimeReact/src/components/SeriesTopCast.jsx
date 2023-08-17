// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from "react-router-dom";

// const apiKey = "79c51a2ee1ecd5ad9edbb3a779c4c767";

// const SeriesTopCast = () => {
//   const [cast, setCast] = useState([]);
//   const { showId } = useParams();
//   useEffect(() => {
//     if (showId) { // Ensure showId is defined before making the API request
//       const fetchCast = async () => {
//         try {
//           const response = await axios.get(
//             `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${apiKey}`
//           );
//           setCast(response.data.cast);
//         } catch (error) {
//           console.error('Error fetching cast:', error);
//         }
//       };
  
//       fetchCast();
//     }
//   }, [apiKey, showId]);
  

//   return (
//     <div>
//       <h2>TV Show Cast</h2>
      
//         {cast.map(actor => (
//           <p key={actor.id}>{actor.name}</p>
//         ))}

//     </div>
//   );
// };

// export default SeriesTopCast;


import React, { useState, useEffect } from 'react';
import './TopCast.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopCast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  const [actorsToShow, setActorsToShow] = useState(4);
  const [showMore, setShowMore] = useState(true); // Initial state for showing "More" button

  const apiKey = '79c51a2ee1ecd5ad9edbb3a779c4c767';
  const { seriesId } = useParams();

  useEffect(() => {
    const fetchTopCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${seriesId}/credits?api_key=${apiKey}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching top cast:', error);
      }
    };

    fetchTopCast();
  }, [seriesId]);

  const handleShowMore = () => {
    const newActorsToShow = actorsToShow + 8; // Show 8 more actors
    setActorsToShow(newActorsToShow);
    setShowMore(false); // Hide "More" button
  };

  const handleShowLess = () => {
    setActorsToShow(4); // Show 4 actors again
    setShowMore(true); // Show "More" button
  };

  return (
    <div style={{marginTop:'64px'}} className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p style={{ fontSize: '40px', fontStyle: 'normal', fontWeight: '800', lineHeight: 'normal', margin: '0' }}>Top Cast</p>
        {showMore ? (
          <button style={{ display: 'inline-flex', alignItems: 'flex-start' }} className="btn btn-light" onClick={handleShowMore} >More</button>
        ) : (
          <button style={{ display: 'inline-flex', alignItems: 'flex-start' }} className="btn btn-light" onClick={handleShowLess} >Less</button>
        )}
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {cast.slice(0, actorsToShow).map((actor) => (
          <div className="col mt-2" key={actor.id}>
              <div style={{ width: '100%', height: '100%', borderRadius: '12px', boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.05)' }} className="d-flex">
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', marginLeft: '12px' }}>
      
              <Link  key={actor.id} to={`/actors/${actor.id}`}>

                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
 </Link>
              </div>
              <div className="ml-3 d-flex flex-column justify-content-center">
                <h5 className="actor-name">{actor.name}</h5>
                <p className="card-text2">{actor.character}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCast;


