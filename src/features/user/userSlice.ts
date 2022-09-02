import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UnauthUser, UserDetails, UserState } from "./user.types";
import { createUserDocumentFromAuth, createUserMovieListDocument, getUser, signInAuthUserWithEmailAndPassword, signInWithGithubPopup, signInWithGooglePopup, signOutUser } from "../../utilities/firebase";
import { getMovieList } from "../movie/userMovieList";

const initialState: UserState = {
    userData: {
        email: '',
        displayName: '',
    },
    status: "unauth", //'authing' | 'authed' | 'unauth'
    loading: false
};



export const loginWithGooglePopup = createAsyncThunk("userData/loginWithGooglePopup", async (_, { dispatch }) => {
    const response = await signInWithGooglePopup()
    const { email, displayName } = response.user

    await createUserDocumentFromAuth(response.user);
    await createUserMovieListDocument({ email, displayName }, [])
    dispatch(getMovieList(email!))
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

export const loginWithGithubPopup = createAsyncThunk("userData/loginWithGithubPopup", async (_, { dispatch }) => {
    const response = await signInWithGithubPopup();
    const { displayName, email } = response.user;
    await createUserDocumentFromAuth(response.user);
    await createUserMovieListDocument({ email, displayName }, [])
    dispatch(getMovieList(email!))
    return { displayName, email }
})

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        stopLoading: (state) => {
            state.loading = false
        }
    },
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
            state.userData = {
                email: '',
                displayName: '',
            };
            state.status = "unauth";
        }).addCase(loginWithGithubPopup.fulfilled, (state, action: PayloadAction<UserDetails>) => {
            state.userData = action.payload;
            state.status = "authed";
        }).addCase(loginWithGithubPopup.pending, (state) => {
            state.status = "authing";
        }).addCase(loginWithGithubPopup.rejected, (state) => {
            state.status = "unauth";
        }).addCase(logCurrentUserOut.fulfilled, (state) => {
            state.status = "unauth";
            state.userData = {
                email: '',
                displayName: '',
            };
        })
    }
})

export const { startLoading, stopLoading } = userSlice.actions

export default userSlice.reducer