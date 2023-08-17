//Arama sorunusx
import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';
import { useNavigate } from 'react-router-dom'; // useNavigate kullanıldı

const Search = ({ onUpdateMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); // useNavigate hook'unu tanımladık

  const handleSearch = async () => {
    navigate(`/SearchResults/${searchQuery}`); // Yönlendirme işlemi
    try {
      const API_KEY = '79c51a2ee1ecd5ad9edbb3a779c4c767';
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      setMovies(response.data.results);
      console.log(response.data.results);
      onUpdateMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setMovies([]);
      onUpdateMovies([]);
    }
  

  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="kapsam">
      <div className="kutu">
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a movie, person or genre"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            type="submit"
            className="btn btn-search"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

//Live Search Kısmen
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Search.css';
// import { useNavigate } from 'react-router-dom';

// const Search = ({ onUpdateMovies }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const navigate = useNavigate();

//   const handleSearch = async () => {
//     navigate(`/SearchResults/${searchQuery}`);
//     try {
//       const API_KEY = '79c51a2ee1ecd5ad9edbb3a779c4c767';
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
//       );
//       setMovies(response.data.results);
//       onUpdateMovies(response.data.results);
//     } catch (error) {
//       console.error('Error fetching movie data:', error);
//       setMovies([]);
//       onUpdateMovies([]);
//     }
//   };

//   useEffect(() => {
//     if (searchQuery.trim() !== '') {
//       const delayTimer = setTimeout(handleSearch, 800); // Delay before making the API call
//       return () => clearTimeout(delayTimer); // Cleanup the timer on re-renders
//     }
//   }, [searchQuery]);

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="kapsam">
//       <div className="kutu">
//         <div className="search-bar">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search for a movie, person or genre"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           <button
//             type="submit"
//             className="btn btn-search"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;





