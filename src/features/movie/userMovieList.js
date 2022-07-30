import { createSlice,  } from "@reduxjs/toolkit";
/*
- create a list
- add to list
- delete from list
- delete list
*/
const initialState = {
    movieList: [],
}
/*
 -  on click of any movie, log that particular movie to console
 - pass the movie used to render into the function that prints the movie to console
 -  pass that movie into a function that uploads it into the firestore database and add to the list in the state using the reducers.
 */
export const userMoviesList = createSlice({
    name: 'userMoviesList',
    initialState,
    reducers:{},
    extraReducers(builder) {

    }
})

export default userMoviesList.reducer