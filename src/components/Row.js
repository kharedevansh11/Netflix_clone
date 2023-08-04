import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
function Row(props) {
  let { title, fetchUrl, isLargeRow = false } = props;
  const [movies, setMovie] = useState([]);
  const[trailerUrl,setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
    const opts={
      height:"400",
      width:"100%",
      playerVars:{
        autoplay:1,
      }

    }
    const handleClick = (movie)=>{
        if(trailerUrl)
        {
          setTrailerUrl("");
        }
        else{
          //the line below basically is a npm funtion and it searches thr yt for the trailer for the particular movie
          movieTrailer(movie?.name || "" || movie?.orignal_name)
          .then((url)=>{
            const urlParams= new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error)=>console.log(error));
        }
    }

  // console.log(movies);

  return (
    <div>
      <div className="row">
        <h2>{title}</h2>

        <div className="posters">
          {movies.map(movie => (
            <img
            onClick={
              ()=> handleClick(movie)
             } 
             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name} 
              className={`row_poster ${isLargeRow && 'posterLarge'}`}
              key={movie.id}
              />
          ))}
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}   
      {/* above line is for if you have the trailerUrl for the particular poster then only it will play */}
    </div>
  )
}

export default Row
