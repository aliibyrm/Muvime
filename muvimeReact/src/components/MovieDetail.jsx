import React, { useState, useEffect } from "react";
import "./MovieDetail.css";
import watch from "../img/play-circle-fill.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import YoutubeModal from "./YoutubeModal.jsx";
import bookmark from "../img/bookmark.jpg";

const MovieDetail = () => {
  const params = useParams();
  const [videoUrl, setVideoUrl] = useState("");

  const apiKey = "79c51a2ee1ecd5ad9edbb3a779c4c767";
  const { movieId } = useParams();
  const [movieCrew, setMovieCrew] = useState([]);

  const [movieDetails, setMovieDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      console.log(response.data);
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    // ... diğer useEffect kodları

    const fetchMovieVideos = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
        );
        const videos = response.data.results;
        if (videos.length > 0) {
          setVideoUrl(`https://www.youtube.com/watch?v=${videos[0].key}`);
        }
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };

    fetchMovieVideos();
  }, [movieId]);

  const handleWatchClick = () => {
    // setShowVideo(true);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchMovieCrew = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        setMovieCrew(response.data.crew);
      } catch (error) {
        console.error("Error fetching movie crew:", error);
      }
    };

    fetchMovieDetails();
    fetchMovieCrew();
  }, [movieId]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w500${movieDetails?.poster_path})`,
      }}
      className="detaykapsam"
    >
    
      <div className="detaykutu">
      <div style={{position:'absolute',marginLeft:'90%',marginTop:'5%'}}  className="bookmark-icon-container">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 3V23.25C2.9999 23.3802 3.03373 23.5083 3.09814 23.6215C3.16255 23.7347 3.25532 23.8291 3.36734 23.8956C3.47935 23.962 3.60674 23.9982 3.73696 24.0004C3.86718 24.0027 3.99574 23.971 4.11 23.9085L12 19.6035L19.89 23.9085C20.0043 23.971 20.1328 24.0027 20.263 24.0004C20.3933 23.9982 20.5207 23.962 20.6327 23.8956C20.7447 23.8291 20.8375 23.7347 20.9019 23.6215C20.9663 23.5083 21.0001 23.3802 21 23.25V3C21 2.20435 20.6839 1.44129 20.1213 0.87868C19.5587 0.316071 18.7956 0 18 0L6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3Z" fill="white"/>
    </svg> 
  
  </div>
        <img
        
          src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} 
          
          alt="Now Streaming"
          className="card-img-top"
          
        />
        
 
        <div className="now-streaming-text">
          <img src={watch} alt="" onClick={handleWatchClick} />
          Now Streaming
          <p className="watchNow">Watch Now</p>
        </div>
        <YoutubeModal
          isOpen={isModalOpen}
          videoUrl={videoUrl}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <div style={{ marginTop: "64px", marginLeft: "135px" }}>
        <h1 className="movieTitle">{movieDetails?.title}</h1>
        <p className="movieDetail">
          {movieDetails?.release_date} <br />
          {movieDetails?.genres.map((genre) => genre.name).join(", ")} <br />
          {movieDetails?.runtime} min
        </p>
        <p className="movieOverview">Overview</p>
        <p className="overviewText">{movieDetails?.overview}</p>

        <div style={{ marginTop: "64px" }} className="movieCrew grid-container">
          {movieCrew.slice(0, 9).map((crewMember, index) => (
            <div className="column grid-item" key={index}>
              <p>
                {crewMember.name} <br />
                {crewMember.job}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
