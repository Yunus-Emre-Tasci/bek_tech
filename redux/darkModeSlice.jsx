import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, { payload }) => {
      state.darkMode = payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
