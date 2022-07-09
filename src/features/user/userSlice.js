import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, signInWithGooglePopup } from "../../utilities/firebase";

const initialState = {
  userData: null,
  status: "unauth", //'authing' | 'authed' | 'failed' | 'unauth'
};

export const loginWithGooglePopup = createAsyncThunk("userData/loginWithGooglePopup", async () => {
    const response = await signInWithGooglePopup()
    return response;
})

export const getCurrentUser = createAsyncThunk("userData/getCurrentUser", async (userUid) => {
    const response = await getUser(userUid);
    console.log(response);
})

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginWithGooglePopup.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.status = "authed";
        }).addCase(loginWithGooglePopup.pending, (state, action) => {
            state.status = "authing";
        }).addCase(loginWithGooglePopup.rejected, (state, action) => {
            state.status = "failed";
        })
    }
})

export default userSlice.reducer