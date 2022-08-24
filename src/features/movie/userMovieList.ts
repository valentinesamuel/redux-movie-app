import { createAsyncThunk, createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { getUserMovieList } from "../../utilities/firebase"
import { Movie, UserMovieListInitialState } from "./movie.types";

const initialState:UserMovieListInitialState = {
    listOfMovies: [],
    feedbackMessage: false,
}

export const getMovieList = createAsyncThunk("movieList/getUserMovieList", async (email: string) => {
    const response = await getUserMovieList(email);
    return response[0].listOfMovies
})



export const userMovieListSlice = createSlice({
    name: 'userMoviesList',
    initialState,
    reducers: {
        addMovieToList: (state, action: PayloadAction<Movie>) => {
            state.listOfMovies.push(action.payload)    
            state.feedbackMessage =false
        },
        removeMovieFromList: (state, action: PayloadAction<Movie>) => {
            state.listOfMovies = state.listOfMovies.filter(movie => movie.id !== action.payload.id)
        },
        clearMovieList: (state) => {
            state.listOfMovies = [];
        },
        showFeedbackMessage: (state) => {
            state.feedbackMessage = true
        },
        hideFeedbackMessage: (state ) => {
            state.feedbackMessage = false
        },
    },
    extraReducers(builder) {
        builder.addCase(getMovieList.fulfilled, (state, action: PayloadAction<Movie[]>) => {
            state.listOfMovies = action.payload
        })
     
    }
})
export const { addMovieToList, removeMovieFromList, clearMovieList, hideFeedbackMessage, showFeedbackMessage } = userMovieListSlice.actions

export default userMovieListSlice.reducer