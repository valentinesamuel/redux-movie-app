import { createAsyncThunk, createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { getUserMovieList, saveUserMovieList } from "../../utilities/firebase"
import { UserDetails } from "../user/user.types";
import { Movie, UserMovieListInitialState } from "./movie.types";

const initialState: UserMovieListInitialState = {
    listOfMovies: [],
    feedbackMessage: false,
}

export const getMovieList = createAsyncThunk("movieList/getUserMovieList", async (email: string) => {
    const response = await getUserMovieList(email);
    console.log('getting', response)
    return response[0].listOfMovies
})

export const saveMovieList = createAsyncThunk("movieList/saveMovieList", async (emailAndMovieList: { auth: UserDetails, movies: Movie[] }) => {
    const { auth, movies } = emailAndMovieList
    await saveUserMovieList(movies, auth.email!)
})

export const userMovieListSlice = createSlice({
    name: 'userMoviesList',
    initialState,
    reducers: {
        addMovieToList: (state, action: PayloadAction<Movie>) => {
            state.listOfMovies.push(action.payload);
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
        hideFeedbackMessage: (state) => {
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