import React from 'react';
import Navbar from '../components/Navbar';
import MovieDetail from '../components/MovieDetail';
import { useParams } from 'react-router-dom';
import TopCast from '../components/TopCast';
import MoreLikeThis from '../components/MoreLikeThis';
import Footer from '../components/Footer';
import LegacyFooter from '../components/LegacyFooter';


const MovieDetailPage =() => {
   const params = useParams();
  
  console.log(params)
  return (
    <>
      <Navbar />
      <MovieDetail />
      <TopCast/>
      <MoreLikeThis/>
      <Footer />
      <LegacyFooter />
    </>
  );
}

export default MovieDetailPage;
