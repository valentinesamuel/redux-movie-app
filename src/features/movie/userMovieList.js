import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/*
- create a list
- add to list
- delete from list
- delete list
*/
const initialState = {
    movieList: [],
}

export const userMoviesList = createSlice({
    name: 'userMoviesList',
    initialState,
    reducers:{},
    extraReducers(builder) {

    }
})

export default userMoviesList.reducer