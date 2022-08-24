// create a movie type
export type Movie = {
    adult: boolean,
    title: string,
    backdrop_path: string | null,
    genres?: {
        id: number,
        name: string
    },
    genre_ids: number[]
    id: number,
    original_language: string,
    original_title?: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    spoken_languages?: {
        iso_639: string,
        name: string
    }
    status?: string,
    tagline?: string | null,
    vote_average: number,
    vote_count: number,
    video?: boolean,
}

// create a movie cateory type
export type Category = {

}

// create a movie list state type
export type MovieList = {
    page: number,
    total_pages: number,
    total_results: number,
    results: Movie[]
}

// create a movie list initial state type
export type MovieListInitialState = {
    movies: {
        popularMovies: {},
        topRatedMovies: {},
        nowPlayingMovies: {},
        upcomingMovies: {},
    }
}



// create a movie list type

// create a user movie list state type

// create a user movie list initial state type