import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} Poster`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <span>Rating: {rating}</span>
    </div>
  );
};

export default MovieCard;
