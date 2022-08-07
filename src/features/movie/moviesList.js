import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNowPlayingMovie, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../../utilities/tmdb";

const initialState = {
    movies: {
        popularMovies: [],
        topRatedMovies: [],
        nowPlayingMovies: [],
        upcomingMovies: [],
    }
}

export const storeGetPopularMovies =createAsyncThunk("movieList/getPopularMovies", async () => {
    const response = await getPopularMovies();
    return(response)
})

export const storeGetTopRatedMovies = createAsyncThunk("movieList/getTopRatedMovies", async () => {
    const response = await getTopRatedMovies();
    return(response)
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
    name:'movieList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(storeGetPopularMovies.fulfilled, (state, action) => {
            state.movies.popularMovies = action.payload
        }).addCase(storeGetTopRatedMovies.fulfilled, (state, action) => {
            state.movies.topRatedMovies = action.payload
        }).addCase(storeGetNowPlayingMovies.fulfilled, (state, action) => {
            state.movies.nowPlayingMovies = action.payload
        }).addCase(storeGetUpcomingMovies.fulfilled, (state, action) => {
            state.movies.upcomingMovies = action.payload
        })
    }
})

export default movieListSlice.reducer