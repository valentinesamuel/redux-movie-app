import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithGooglePopup } from "../../utilities/firebase";

const initialState = {
    userData: null
}

export const loginWithGooglePopup = createAsyncThunk("userData/loginWithGooglePopup", async () => {
    const response = await signInWithGooglePopup()
    return response;
})

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginWithGooglePopup.fulfilled, (state, action) => {
            state.userData = action.payload;
            console.log(action.payload.user)
        })
    }
})

export default userSlice.reducer