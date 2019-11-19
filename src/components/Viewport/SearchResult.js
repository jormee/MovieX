import React from 'react';

const SearchResult = ({ movie }) => {

  console.log(movie);
  const {
    Actors, Awards,
    Title, Genre, 
    Year, Website, Plot, 
    Poster, Director, 
    Ratings, Runtime, Type
  } = movie;

  return(
    <div className='result'>
      <div className='movie-poster'>
        <img src={Poster} alt={`${Title} poster`} />
      </div>
      <div className="details">
        <h3 className='movie-title'>{Title}({Year})</h3>
        <p className='movie-subtitle'>{Genre}</p>
        <p className='movie-subtitle'>{Type}</p>
        <div className='line'>
          <p className='title'>Runtime:</p>
          <span className='value'>{Runtime}</span>
        </div>
        <div className='line'>
          <p className='title'>Actors:</p>
          <span className='value'>{Actors}</span>
        </div>
        <div className='line'>
          <p className='title'>Plot:</p>
          <span className='value plot'>{Plot}</span>
        </div>
        <div className='line'>
          <p className='title'>Ratings:</p>
          <span className='value'>{
          Ratings && Ratings !=='N/A' &&
            <ul className=''>
            {Ratings.map(rating => <li key={Ratings.indexOf(rating)} className=''>{rating.Source}: {rating.Value}</li>)}
          </ul>
        }</span>
        </div>
        <div className='line'>
          <p className='title'>Awards:</p>
          <span className='value'>{Awards}</span>
        </div>
        <div className='line'>
          <p className='title'>Director:</p>
          <span className='value'>{Director}</span>
        </div>
        {Website !== "N/A" && 
          <div className='line'>
            <p className='title'>Website:</p>
            <span className='value'><a href={Website}>{Website}</a></span>
          </div>
        }
      </div>
    </div>
  )
}

export default SearchResult;