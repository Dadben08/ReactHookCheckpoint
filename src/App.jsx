import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://via.placeholder.com/150', rating: 9 },
    { title: 'Interstellar', description: 'A space epic', posterURL: 'https://via.placeholder.com/150', rating: 8.5 },
    // Add more movie objects here
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= (filterRating ? parseFloat(filterRating) : 0)
  );

  return (
    <div className="App" style={{ textAlign: 'center', justifyItems: 'center', justifyContent: 'center' }}>
      <h1>Movie List</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({
        title: 'New Movie',
        description: 'New movie description',
        posterURL: 'https://via.placeholder.com/150',
        rating: 7
      })}>
        Add New Movie
      </button>
    </div>
  );
};

export default App;
