import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

const MovieCard = ({ movie }) => {

  const { Poster, Title, Type, Year, imdbID } = movie;

  return(
    <Link to={`/movies/${imdbID}`}>
      <div className='movie-card front'>
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
    </Link>
  )

}

export default MovieCard