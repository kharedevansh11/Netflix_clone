const API_KEY = '600047533be4591b00b7f063dcaf1305';

const requests= {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,

    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,

    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27`,

    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

//https://api.themoviedb.org/3/trending/all/week?api_key=600047533be4591b00b7f063dcaf1305&language=en-US

export default requests;