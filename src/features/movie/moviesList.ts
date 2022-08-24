import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNowPlayingMovie, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../../utilities/tmdb";
import {  MovieList, MovieListInitialState } from "./movie.types";

const initialState: MovieListInitialState = {
    movies: {
        popularMovies: {},
        topRatedMovies: {},
        nowPlayingMovies: {},
        upcomingMovies: {},
    }
}

export const storeGetPopularMovies = createAsyncThunk("movieList/getPopularMovies", async () => {
    const response = await getPopularMovies();
    return (response)
})

export const storeGetTopRatedMovies = createAsyncThunk("movieList/getTopRatedMovies", async () => {
    const response = await getTopRatedMovies();
    return (response)
})

export const storeGetNowPlayingMovies = createAsyncThunk("movieList/getNowPlayingMovies", async () => {
    const response = await getNowPlayingMovie()
    return (response)
})

export const storeGetUpcomingMovies = createAsyncThunk("movieList/getUpcomingMovies", async () => {
    const response = await getUpcomingMovies()
    return (response)
})

export const movieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(storeGetPopularMovies.fulfilled, (state, action:PayloadAction<MovieList[]>) => {
            state.movies.popularMovies = action.payload
        }).addCase(storeGetTopRatedMovies.fulfilled, (state, action: PayloadAction<MovieList[]>) => {
            state.movies.topRatedMovies = action.payload
        }).addCase(storeGetNowPlayingMovies.fulfilled, (state, action: PayloadAction<MovieList[]>) => {
            state.movies.nowPlayingMovies = action.payload
        }).addCase(storeGetUpcomingMovies.fulfilled, (state, action: PayloadAction<MovieList[]>) => {
            state.movies.upcomingMovies = action.payload
        })
    }
})

export default movieListSlice.reducer