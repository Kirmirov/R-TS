export interface ITheme {
	name: string;
	colors: {
		backgroundPrimary: string;
		backgroundSecondary: string;
	};
};

export interface IThemeList {
	[key: string]: ITheme
}