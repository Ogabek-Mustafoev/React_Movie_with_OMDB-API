import React from "react";
import Movie from "./Movie";
import "./style.css";

export default function Movies({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
