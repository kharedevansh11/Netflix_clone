import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from './axios';
import requests from './Request';
function Banner() {

  const [movie,setMovie] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request =  await axios.get(requests.fetchNetflixOrignals);

      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length -1)
      ]);
      return request;
    }

    fetchData();

  },[]);

  console.log(movie);

  function truncate(string,n){
      if(string.length > n)
      return (string.substr(0,n-1)+"...");
      else
      return string;
  }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',

    }}>
        <div className="banner_content">
            <h1 className='banner_title'>{
            movie?.name || movie?.original_name || movie?.title
            }</h1>
            <div className="banner_button">
            <button className='bannerButton'>Play</button>
            <button className='bannerButton'>My list</button>
            </div>
            <h1 className="banner_description">{truncate(movie?.overview!= null ? movie?.overview : "no details",150)}</h1>
            
            
        </div>

        <div className="banner--fadeBottom"/>
      
    </header>
  )
}
export default Banner
