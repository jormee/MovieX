import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

const MovieCard = ({ movie, getMovieDetails }) => {

  const { Poster, Title, Type, Year, imdbID } = movie;

  return(
    <div className='movie-card front' onClick={(event) => getMovieDetails(movie.imdbID)}>
      <div className="movie-top">
        <div className="movie-poster">
          {
            Poster && Poster !== "N/A"
              ? <img src={Poster} alt={`${Title} poster`} className='movie-poster' />
              : <p className="no-poster">No image found</p>
          }
        </div>
        <p className="movie-title">{Title} ({Year})</p>
      </div>
      <p className="movie-type">{Type}</p>
    </div>
  )

}

export default MovieCard