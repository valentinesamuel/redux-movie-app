import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { PERSIST, persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './user/userSlice'
import movieReducer from './movie/movieSlice'
import userMovieListReducer from "./movie/userMovieList";


const rootReducer = combineReducers({
  userSlice: userReducer,
  movieSlice: movieReducer,
  userMoviesList: userMovieListReducer
})

const persistConfig = {
  key: 'root',

  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          PERSIST,
          "userData/loginWithGooglePopup/fulfilled",
          "userMoviesList",
          "movieSlice"
        ],
        ignoredPaths: ["userSlice.userData", "movieSlice", "userMoviesList"],
      },
    }),
});

export const persistor = persistStore(store)
