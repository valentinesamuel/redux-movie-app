import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserState } from "./user.types";
import { getUser, signInWithGithubPopup, signInWithGooglePopup, signOutUser } from "../../utilities/firebase";

const initialState: UserState = {
    userData: {},
    status: "unauth", //'authing' | 'authed' | 'failed' | 'unauth'
};

export const loginWithGooglePopup = createAsyncThunk("userData/loginWithGooglePopup", async () => {
    const response = await signInWithGooglePopup()
    return response.user;
})

export const getCurrentUser = createAsyncThunk("userData/getCurrentUser", async (email) => {
    const response = await getUser(email);
    console.log(response)
    return response;
})


export const logCurrentUserOut = createAsyncThunk("userData/logOut", async () => {
    const response = await signOutUser()
    return response;
})

export const loginWithGithubPopup = createAsyncThunk("userData/loginWithGithubPopup", async () => {
    const response = await signInWithGithubPopup();
    const { displayName, email } = response.user;
    console.log(response.user)
    const userDetails = { displayName, email }
    return userDetails;
})

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginWithGooglePopup.fulfilled, (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
            state.status = "authed";
        }).addCase(loginWithGooglePopup.pending, (state) => {
            state.status = "authing";
        }).addCase(loginWithGooglePopup.rejected, (state) => {
            state.status = "failed";
        }).addCase(getCurrentUser.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.status = "authed";
        }).addCase(getCurrentUser.pending, (state) => {
            state.status = "authing";
        }).addCase(getCurrentUser.rejected, (state) => {
            state.status = "failed";
        }).addCase(logCurrentUserOut.fulfilled, (state) => {
            state.userData = {};
            state.status = "unauth";
        }).addCase(loginWithGithubPopup.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.status = "authed";
        })
    }
})

export default userSlice.reducer