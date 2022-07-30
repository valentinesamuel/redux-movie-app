import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { getUserMovieList } from "../../utilities/firebase"
/*
- add to list
- delete from list

*/
const initialState = {
    movieList: null,
}
/*
 -  on click of any movie, log that particular movie to console
 - pass the movie used to render into the function that prints the movie to console
 -  pass that movie into a function that uploads it into the firestore database and add to the list in the state using the reducers.
 */
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
            state.movieList.filter(movie => movie.id !== action.payload.id)
        }
    },
    extraReducers(builder) {
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.movieList = action.payload[0].listOfMovies
        })
    }
})
export const { addMovieToList, removeMovieFromList } = userMovieListSlice.actions

export default userMovieListSlice.reducer