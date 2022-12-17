import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import { useGlobalContext } from "./context";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const { openModal, currentSelection, setCurrentSelection } = useGlobalContext();

  const handleClick = (movie) => {
    setCurrentSelection(movie);
    openModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {/* row posters /*/}
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              className={isLargeRow ? "row-poster" : "row-backdrop"}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
