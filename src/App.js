import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg'

 const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6f042053";

 const App = () => {

  const [searchTerm,setSearchTerm] = useState('');
  const [movie,setMovies] = useState([]);
  
  useEffect(() => {
    searchMovies('Avengers');
  }, []);
  
  
  const searchMovies = async (title) => {
      const response  = await fetch(`${API_URL}&s=${title}`);
       const res = await response.json();
      if (res.Search) {
        setMovies(res.Search);
      }
      console.log(res);
    }
 
      return (
  <div> 
      <h1>PURPLE</h1>
      <div className='search'>
          <input 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search for a movie'
          />
          <img 
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
          />
      </div>
      {movie?.length > 0 ? (
             <div className="container">
              {movie.map((movie) => (
                  <MovieCard movie={movie} />
              ))}
              </div>
          ) : (
              <div className="empty">
                  <h1>NO MOVIES FOUND</h1>
              </div>
          )}
  
  </div>
         
  
  )
  }
  
export default App;
