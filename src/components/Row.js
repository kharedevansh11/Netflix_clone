import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
function Row(props) {
    let{title,fetchUrl,isLargeRow=false} = props;
        const [movies,setMovie] = useState([]);
        const base_url = "https://image.tmdb.org/t/p/original";
        
        useEffect(()=>{
            async function fetchData()
            {
                const request = await axios.get(fetchUrl);
                setMovie(request.data.results);
            }
            fetchData();
        },[fetchUrl])

        console.log(movies);

  return (
    <div>
      <div className="row">
        <h2>{title}</h2>

      <div className="posters">
      {movies.map(movie => (
            <img src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name} className={`row_poster ${isLargeRow && 'posterLarge'}`}
            key={movie.id}/>

            
        ))}
      </div>

      </div>
    </div>
  )
}

export default Row
