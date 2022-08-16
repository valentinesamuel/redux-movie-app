import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { getUserMovieList } from "../../utilities/firebase"

const initialState = {
    movieList: [],
}

export const getMovieList = createAsyncThunk("movieList/getUserMovieList", async (email) => {
    const response = await getUserMovieList(email);
    return response
})


export const userMovieListSlice = createSlice({
    name: 'userMoviesList',
    initialState,
    reducers: {
        addMovieToList: (state, action) => {
            state.movieList.push(action.payload)
        },
        removeMovieFromList: (state, action) => {
          state.movieList = state.movieList.filter(movie => movie.id !== action.payload.id)
        },
        clearMovieList: (state) => {
            state.movieList = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.movieList = action.payload[0].listOfMovies
        })
    }
})
export const { addMovieToList, removeMovieFromList, clearMovieList } = userMovieListSlice.actions

export default userMovieListSlice.reducer