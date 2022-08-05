import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularMovies } from "../../utilities/tmdb";

const initialState = {
    movies: {
        popularMovies: []
    }
}

export const storeGetPopularMovies =createAsyncThunk("movieList/getPopularMovies", async () => {
    const response = await getPopularMovies();
    console.log(response)
    return(response)
})

export const movieListSlice = createSlice({
    name:'movieList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(storeGetPopularMovies.fulfilled, (state, action) => {
            state.movies.popularMovies = action.payload
        })
    }
})

export default movieListSlice.reducer