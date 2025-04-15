import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    toggleFavoriteReducer: (state, action) => {
      const movie = action.payload;
      if (
        state.favorites.findIndex((element) => element.id === movie.id) === -1
      ) {
        state.favorites.push(movie);
      } else {
        state.favorites = state.favorites.filter(
          (element) => movie.id !== element.id
        );
      }
    },
  },
});
export const {toggleFavoriteReducer} = favoriteSlice.actions;
export default favoriteSlice.reducer;
