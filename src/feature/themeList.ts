import { createSlice } from "@reduxjs/toolkit";
import { ITheme } from "../models/theme";
import { pThemes } from "../styles/themes";

export interface ThemeState {
	pTheme: ITheme
};

const initialState: ThemeState = {
	pTheme: pThemes['colors'],
};

export const themeSlice = createSlice({
	name: 'themeList',
	initialState,
	reducers: {
		toggleThemeAction: (state: ThemeState) => {
			state.pTheme = state.pTheme.name === 'colors' ? pThemes['dark'] : pThemes['colors'];
		},
	},
});


export const { toggleThemeAction } = themeSlice.actions;

export default themeSlice.reducer;