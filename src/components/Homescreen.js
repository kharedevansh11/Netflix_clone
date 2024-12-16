import React from 'react'
import './Homescreen.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from './Request';
import Row from "./Row"
const Homescreen = () => {
  return (
    <div className='homescreen'>
        <Nav/>

        <Banner/>

        <Row
          title="CineStream orignals"
          fetchUrl= {requests.fetchNetflixOrignals}
          isLargeRow
           />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        

    </div>
  )
}

export default Homescreen
