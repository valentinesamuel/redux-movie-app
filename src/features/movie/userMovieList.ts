import { createAsyncThunk, createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { getUserMovieList, saveUserMovieList } from "../../utilities/firebase"
import { UserDetails } from "../user/user.types";
import { Movie, UserMovieListInitialState } from "./movie.types";
import { startLoading, stopLoading } from "../user/userSlice";


const initialState: UserMovieListInitialState = {
    listOfMovies: [],
    feedbackMessage: false,
}

export const getMovieList = createAsyncThunk("movieList/getUserMovieList", async (email: string) => {
    const response = await getUserMovieList(email);
    return response[0].listOfMovies
})

export const saveMovieList = createAsyncThunk("movieList/saveMovieList", async (emailAndMovieList: { auth: UserDetails, movies: Movie[] }, { dispatch }) => {
    dispatch(startLoading())
    const { auth, movies } = emailAndMovieList
    await saveUserMovieList(movies, auth.email!)
    dispatch(stopLoading())
})

export const userMovieListSlice = createSlice({
    name: 'userMoviesList',
    initialState,
    reducers: {
        addMovieToList: (state, action: PayloadAction<Movie>) => {
            const alreadyExist = state.listOfMovies.some(movie => movie.id === action.payload.id)
            if (!alreadyExist) {
                state.listOfMovies.push(action.payload);
            }
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