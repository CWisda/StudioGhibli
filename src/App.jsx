import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  // const [sortOrder, setSortOrder] = useState('asc');

  // const sortByRating = () => {
  //   const sortedMovies = [...movies].sort((a, b) => {
  //     if (sortOrder === "asc") {
  //       return a.rating - b.rating;
  //     } else {
  //       return b.rating - a.rating;
  //     }
  //   });
  //   setMovies(sortedMovies);
  // };

  // const toggleSortOrder = () => {
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };





  return (
    <>
      <div className="App">
        <h1>STUDIO GHIBLI API</h1>
        {/* <button onClick={sortByRating}>
          Sort by Rotten Tomatoes Rating ({sortOrder})
        </button> */}
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
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

export default App;
