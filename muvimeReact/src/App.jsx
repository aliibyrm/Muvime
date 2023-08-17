import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import SearchResults from './pages/SearchResults'; // Yönlendirme hedefi olan bileşen
import MovieDetailPage from './pages/MovieDetailPage'; // MovieDetailPage bileşeninin doğru yolunu eklediğinizden emin olun
import Premium from './pages/Premium';
import ActorPage from'./pages/ActorPage';
import ActorDetailPage from './pages/ActorDetailPage';
import SeriesPage from './pages/SeriesPage'; // Bu dosyanın yolunu doğru şekilde ayarlayın

import SeriesDetailPage from './pages/SeriesDetailPage'; // Bu dosyanın yolunu doğru şekilde ayarlayın
import AboutUsPage from './pages/AboutUsPage'; 
import ContactUsPage from './pages/ContactUsPage'; 
import ProfileDetailPage from './pages/ProfileDetailPage'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SearchResults/:searchQuery" element={<SearchResults/>} />
        <Route path="/MovieDetailPage/:movieId" element={<MovieDetailPage/>} /> 
        <Route path="/Premium" element={<Premium/>} />
        <Route path="/Actor" element={<ActorPage/>} />
        <Route path="/actors/:actorId" element={<ActorDetailPage/>} />
        <Route path="/series" element={<SeriesPage/>} />
        <Route path="SeriesDetailPage/:seriesId" element={<SeriesDetailPage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/ProfileDetail" element={<ProfileDetailPage/>} />






        </Routes>
    </Router>
  );
}

export default App;
