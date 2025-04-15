import { createSlice } from "@reduxjs/toolkit";

const inputValueSlice = createSlice({
  name: "inputValue",
  initialState: { value: "" },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
