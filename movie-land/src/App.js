import {useState, useEffect} from 'react';


import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//fcff1602

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const API_URL = 'http://www.omdbapi.com?apikey=fcff1602';

const App = () =>{

    const [movies, setmovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState([]);

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Batman');
    }, []);

    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                    type="text" 
                    placeholder='Search for movies' 
                    value={searchTerm}
                    onChange={(e)=>{
                        setsearchTerm(e.target.value);
                    }}
                />
                <img 
                    src={SearchIcon} 
                    alt="search" 
                    onClick={()=> searchMovies(searchTerm)}
                />
            </div>

            {
              movies.length > 0 ?(
                <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>  
                    ))}
                </div>
                ):(
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>
                )
            }    
        </div>
    );
}

export default App;