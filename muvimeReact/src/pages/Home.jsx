// import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Description from '../components/Description';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
import LegacyFooter from '../components/LegacyFooter';
import SearchMovie from '../components/SearchMovie';
import MovieDetail from '../components/MovieDetail';
import React, { useState } from 'react';

const Home =() => {
  const [searchResults, setSearchResults] = useState([]);

  const handleUpdateMovies = (results) => {
    setSearchResults(results); // Search bileşeninden gelen sonuçları güncelle
  };
  return (
    <>
      <Navbar />
       <Search onUpdateMovies={handleUpdateMovies} />  
      
      <Description />
      <MovieList /> 
      <Footer />
      <LegacyFooter />
    
    </>
  );
}

export default Home;