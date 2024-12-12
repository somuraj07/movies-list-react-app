import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchIcon from './SearchIcon'; 

 const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6f042053";

function App() {

  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("Batman");
  }, []);
  const searchMovies = async(title) => 
   {
    try {
      const response = await fetch(`<span class="math-inline">\{API\_URL\}&s\=</span>{title}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

     return (
     <div>
      <div className='app'>
      <h1>MOVIELAND</h1>
   </div>
   <div className='search'>
    <input 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder='seach for movies'
    />
    <img 
    src={SearchIcon}
    alt='search'
    onClick={() => searchMovies(searchTerm)} />

  {movies.length > 0 && (
  <div className='container'>
    {movies.map(movie) =>(<MovieCard movie={movie} key={movie.imdbID} />)}
  </div>
)}

{!movies.length && ( 
  <div className='empty'>
    <h2>no movies found</h2>
  </div>
)}
   </div>
     </div>
   
  )};

export default App;
