import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUser, signInWithGithubPopup, signInWithGooglePopup, signOutUser } from "../../utilities/firebase";
const initialState = {
    userData: null,
    status: "unauth", //'authing' | 'authed' | 'failed' | 'unauth'
};

export const loginWithGooglePopup = createAsyncThunk("userData/loginWithGooglePopup", async () => {
    const response = await signInWithGooglePopup()
    return response;
})

export const getCurrentUser = createAsyncThunk("userData/getCurrentUser", async (email) => {
    const response = await getUser(email);
    return response;
})


export const logCurrentUserOut = createAsyncThunk("userData/logOut", async () => {
    const response = await signOutUser()
    return response;
})

export const loginWithGithubPopup = createAsyncThunk("userData/loginWithGithubPopup", async () => {
    const response = await signInWithGithubPopup();
    const { displayName, email } = response.user;
    const userDetails = { displayName, email }
    return userDetails;
})

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginWithGooglePopup.fulfilled, (state, action) => {
            state.userData = action.payload.user;
            state.status = "authed";
        }).addCase(loginWithGooglePopup.pending, (state, action) => {
            state.status = "authing";
        }).addCase(loginWithGooglePopup.rejected, (state, action) => {
            state.status = "failed";
        }).addCase(getCurrentUser.fulfilled, (state, action) => {
            state.userData = action.payload[0];
            state.status = "authed";
        }).addCase(getCurrentUser.pending, (state, action) => {
            state.status = "authing";
        }).addCase(getCurrentUser.rejected, (state, action) => {
            state.status = "failed";
        }).addCase(logCurrentUserOut.fulfilled, (state, action) => {
            state.userData = null;
            state.status = "unauth";
        }).addCase(loginWithGithubPopup.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.status = "authed";
        })
    }
})

export default userSlice.reducer