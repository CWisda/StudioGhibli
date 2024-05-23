import { useEffect, useState } from "react";
import "./films.page.css";
import {filterFilmsByDirector, getListOf } from "../helpers/film.helpers"

function FilmsPage() {
  const [movies, setMovies] = useState([]);
  const [searchDirector, setSearchDirector] = useState("")

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  //derived state - some data that comes from using state variables
  const filteredFilms = filterFilmsByDirector(movies, searchDirector);
  const allDirectors = getListOf(movies, "director");

  return (
    <>
      <div className="App">
        <h1>STUDIO GHIBLI API</h1>
        <form>
          <div className="form-group">
            <label htmlFor="directorSelect">Filter Movies by Director</label>
            <select
              name="directorSelect"
              id="directorSelect"
              value={searchDirector}
              onChange={(event) => {
                setSearchDirector(event.target.value);
              }}
            >
              <option value="">All</option>
              {/* this is where we give the user the dropown director options */}
              {allDirectors.map((director, index) => {
                return <option value={director} key={index}> {director}</option>
              })}
            </select>
          </div>
        </form>
        <ul>
          {filteredFilms.map((movie) => {
            return (
              <li key={movie.id} className="movie-card">
                <div className="movie-left">
                  <h2>{movie.title}</h2>
                  <img src={movie.image} alt={`${movie.title} banner`} />
                </div>
                <div className="movie-right">
                  <p>{movie.description}</p>
                  <p>
                    {movie.running_time}m - Rotten Tomatoes: {movie.rt_score}%
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <p>Created by: Charles Wisda</p>
      </div>
    </>
  );
}

export default FilmsPage;
