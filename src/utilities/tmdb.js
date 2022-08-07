import axios from 'axios'
const TMBD_API_KEY = "d93de582597225ca43bf22d8465a9e19"

/*=======MOVIES=======*/
export const discoverMovies = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}


export const getTopRatedMovies = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getPopularMovies = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getNowPlayingMovie = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getSimilarMovies = async (movie_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getMovieImages = async (movie_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getMovieVideos = async (movie_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getMovieDetails = async (movie_id) => {
    const response = axios.get(`https://api.themoviedb.org/movie/${movie_id}/videos?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getMovieRecommendation = async (movie_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getMovieReviews = async (movie_id) => {
    const response = axios.get(`https://api.themoviedb.org/movie/${movie_id}/reviews?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getUpcomingMovies = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const searchMovie = async (query) => {
    const response = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMBD_API_KEY}&query=${query}`)
        .then(response => {
            return response.data;
        })
    return response
}


/*=======TV_SHOWS=======*/
export const discoverDetails = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTvShowsDetails = async (tv_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTopRatedTvShows = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getPopularTvShows = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getOnAirTvShows = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTodayOnAirTvShows = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getLatestTvShows = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/latest?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTvShowVideos = async (tv_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getSimilarTvShow = async (tv_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTvShowReview = async (tv_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/reviews?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTvShowRecommendation = async (tv_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTvShowSeasonImages = async (tv_id, season_number) => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}/images?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTvShowSeasonVideos = async (tv_id, season_number) => {
    const response = axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}/videos?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTvShowEpisodeVideos = async (tv_id, season_number, episode_number) => {
    const response = axios.get(`https://api.themoviedb.org/3/${tv_id}/season/${season_number}/episode/${episode_number}/videos?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}

export const getTvShowEpisodeImages = async (tv_id, season_number, episode_number) => {
    const response = axios.get(`https://api.themoviedb.org/3/${tv_id}/season/${season_number}/episode/${episode_number}/images?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}


/*=======MISCELLEANOUS=======*/
export const getReviewDetail = async (review_id) => {
    const response = axios.get(`https://api.themoviedb.org/3/review/${review_id}?api_key=${TMBD_API_KEY}`)
        .then(response => {
            return response.data;
        })
    return response
}
/*
- companies
- credits
- etc
*/