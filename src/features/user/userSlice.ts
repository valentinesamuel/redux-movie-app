import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UnauthUser, UserDetails, UserState } from "./user.types";
import { createUserDocumentFromAuth, createUserMovieListDocument, getUser, signInAuthUserWithEmailAndPassword, signInWithGithubPopup, signInWithGooglePopup, signOutUser } from "../../utilities/firebase";

const initialState: UserState = {
    userData: {
        email: '',
        displayName: '',
    },
    status: "unauth", //'authing' | 'authed' | 'unauth'
};

export const loginWithGooglePopup = createAsyncThunk("userData/loginWithGooglePopup", async () => {

    const response = await signInWithGooglePopup()
    await createUserDocumentFromAuth(response.user)
    await createUserMovieListDocument(response.user, [])
    const { email, displayName } = response.user
    return { email, displayName };

})

export const getCurrentUser = createAsyncThunk("userData/getCurrentUser", async (e_mail: string) => {
    const response = await getUser(e_mail);
    const { email, displayName } = response[0];
    return { email, displayName };
})

export const loginWithEmailandPassword = createAsyncThunk("userData/loginWithEmailandPassword", async (userInfo: UnauthUser) => {
    const { UserEmail, UserPassword } = userInfo
    const response = await signInAuthUserWithEmailAndPassword(UserEmail, UserPassword)
    const email = response?.user.email
    const displayName = response?.user.displayName
    return { email, displayName }
}

)

export const logCurrentUserOut = createAsyncThunk("userData/logOut", async () => {
    const response = await signOutUser()
    return response;
})

export const loginWithGithubPopup = createAsyncThunk("userData/loginWithGithubPopup", async () => {
    const response = await signInWithGithubPopup();
    const { displayName, email } = response.user;
    // create a user document from auth and also create a usermovielist
    // await createUserDocumentFromAuth(response.user, { displayName });
    // await createUserMovieListDocument(response.user, [])
    return { displayName, email }

})

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginWithGooglePopup.fulfilled, (state, action: PayloadAction<UserDetails>) => {
            state.userData = action.payload;
            state.status = "authed";
        }).addCase(loginWithGooglePopup.pending, (state) => {
            state.status = "authing";
        }).addCase(loginWithGooglePopup.rejected, (state) => {
            state.status = "unauth";
        }).addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<UserDetails>) => {
            state.userData = action.payload;
            state.status = "authed";
        }).addCase(getCurrentUser.pending, (state) => {
            state.status = "authing";
        }).addCase(getCurrentUser.rejected, (state) => {
            state.status = "unauth";
        }).addCase(logCurrentUserOut.fulfilled, (state) => {
            state.userData = {
                email: '',
                displayName: '',
            };
            state.status = "unauth";
        }).addCase(loginWithGithubPopup.fulfilled, (state, action: PayloadAction<UserDetails>) => {
            state.userData = action.payload;
            state.status = "authed";
        })
    }
})

export default userSlice.reducer