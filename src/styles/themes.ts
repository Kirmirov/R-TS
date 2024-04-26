import { ITheme, IThemeList } from "../models/theme";

const pLigthTheme: ITheme = {
	name: "colors",
	colors: {
		backgroundPrimary: "#4682b4",
		backgroundSecondary: "#edf0f1"
	}
};

const pDarkTheme: ITheme = {
	name: "dark",
	colors: {
		backgroundPrimary: "black",
		backgroundSecondary: "gray"
	}
};

export const pThemes: IThemeList = {
	colors: pLigthTheme,
	dark: pDarkTheme
};
