import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import { useGlobalContext } from "./context";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const {userList, setUserList} = useGlobalContext();
  const [movie, setMovie] = useState([]);
  const addToList = () => {
    if (!userList.includes(movie)) {
    setUserList([
      ...userList,
      movie
    ]);}
  };
  const handleClick = (movie) => {
    const movieName = movie?.name || movie.original_title;
    window.open(`https://www.youtube.com/results?search_query=${movieName}+trailer`, "_blank");
  };
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchTrending}`
      );
      const number = parseInt(
        Math.floor(Math.random() * request.data.results.length)
      );
      setMovie(request.data.results[number]);
      return request;
    };
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        textShadow: "1px 1px 3px #000, 1px 1px 10px #000",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{movie?.name || movie.original_title}</h1>
        <div className="banner-buttons">
          <button className="banner-button" onClick={() => handleClick(movie)}>Trailer</button>
          <button className="banner-button" onClick={addToList}>{userList.includes(movie) ? "Watch Later ✅" : "Watch Later"}</button>
        </div>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
