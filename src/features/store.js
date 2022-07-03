import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE,persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './user/userSlice'


const rootReducer = combineReducers({
  userSlice: userReducer

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
        ],
        ignoredPaths: ["userSlice.userData"],
      },
    }),
});

export const persistor = persistStore(store)
