import React from "react";
import Error from "../error/Error";
import Loader from "../Loader/Loader";
import Movies from "../movies/Movies";
import "./home.css";

export default function Home({ movies = [], loading }) {
  return (
    <section className="home">
      {loading ? (
        <Loader />
      ) : movies.length ? (
        <Movies movies={movies} />
      ) : (
        <Error />
      )}
    </section>
  );
}
