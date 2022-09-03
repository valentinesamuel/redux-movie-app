export type Movie = {
    adult: boolean,
    title: string,
    backdrop_path: string | null,
    genres?: {
        id: number,
        name: string
    }[],
    genre_ids?: number[]
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
    }[],
    status?: string,
    tagline?: string | null,
    vote_average: number,
    vote_count: number,
    video?: boolean,
}

export type MovieList = {
    page: number,
    total_pages: number,
    total_results: number,
    results: Movie[]
}

export type MovieListInitialState = {
    movies: {
        popularMovies: MovieList,
        topRatedMovies: MovieList,
        nowPlayingMovies: MovieList,
        upcomingMovies: MovieList,
    }
}

export type Person = {
    adult: boolean,
    cast_id: number,
    character: string,
    credit_id: string,
    gender: number ,
    id: number,
    known_for_department: string,
    name: string,
    order: number,
    original_name: string,
    popularity: number,
    profile_path: string | null,
}

export type Review = {
    author: string,
    author_details: {
        name: string,
        username: string,
        avatar_path: string,
        rating: number
    },
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string
}

export type MovieReviews = {
    id: number,
    page: number,
    results: Review[],
    total_pages: number,
    total_results: number
}

// create a movie list type
export type UserMovieList = {
    listOfMovies: Movie[] | undefined | null | []
    feedbackMessage?: boolean
}

// create a user movie list state type
export type UserMovieListInitialState = {
    listOfMovies: Movie[],
    feedbackMessage: boolean,
}
