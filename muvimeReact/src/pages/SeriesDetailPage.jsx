import React from "react";
import Navbar from "../components/Navbar";
import SeriesDetail from "../components/TvShowDetail";
import TvShowDetail from "../components/TvShowDetail";
import SeriesCast from "../components/SeriesTopCast";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import LegacyFooter from "../components/LegacyFooter";
import MoreLikeThis from "../components/MoreLikeThis";

const SeriesDetailPage = () => {
  const params = useParams();

  return (
    <>
      <Navbar />
      <TvShowDetail />
      <SeriesCast />
      <MoreLikeThis />
      <Footer />
      <LegacyFooter />
    </>
  );
};

export default SeriesDetailPage;
