import React, {createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import MovieReducer from '../reducers/MovieReducer'

export const MovieContext = createContext();

const MovieContextProvider = props => {

  const [ movies, setMovies] = useState([]);
  const [movieDetails, setDetails] = useState({});
  const [ history, dispatch] = useReducer(MovieReducer, [], () => {
    const savedMovies = localStorage.getItem('history')
    return savedMovies ? JSON.parse(savedMovies) : []
  });

  const searchMovie = input => {
    axios.get(`${process.env.REACT_APP_OMDB_BASE_URL}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${input}`)
      .then(({ data }) => data.Search && setMovies([...data.Search]))
  }

  const getMovieDetails = id => {
    axios.get(`${process.env.REACT_APP_OMDB_BASE_URL}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`)
      .then(({ data }) => data.Title && setDetails({...data}));
  }

  useEffect(() => localStorage.setItem('history', JSON.stringify(history)), [history]);

  return(
    <MovieContext.Provider value={{ searchMovie, movies, dispatch, getMovieDetails, movieDetails }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider;