import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}){
    return(
          <div>
              <h2>{title}</h2>
              <MoviePoster poster={poster}/>
          </div>
        )
    
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="poster" />
        )
}

MoviePoster.propTypes = {
    Poster: PropTypes.string.isRequired
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
export default Movie;
