import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoritesSlice";
import inputValueReducer from "./inputValueSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";





const store = configureStore({
  reducer: combineReducers({
    favorite: persistReducer({ key: "favorites", storage }, favoriteReducer),
    inputValue: inputValueReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);

