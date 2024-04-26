import { RootState } from "../store";

export const saveToLocalStorage = (state: RootState) => {
	try {
		const strAppState:string = JSON.stringify(state);
		localStorage.setItem('AppState', strAppState);
	} catch (e) {
		console.warn(e);
	}
};	

export const loadFromLocalStorage = () => {
	try {
		const strAppState:string | null = localStorage.getItem('AppState');
		if (!strAppState) 
			return undefined;
		else
			return JSON.parse(strAppState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
};
