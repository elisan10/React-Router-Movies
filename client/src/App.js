import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, Route, Switch } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";

export default function App() {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState(null);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          return setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);
  console.log("This is the movie list", movieList);
  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  if (!movieList) return null;
  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />
      <div>
        <Switch>
          <Route exact path="/">
            <MovieList movies={movieList} />
          </Route>
          {/* <Route exact path="/movies">
            <MovieCard movies={movieList} />
          </Route> */}
          <Route path="/movies/:itemID">
            <Movie movies={movieList} key={movieList.id} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
