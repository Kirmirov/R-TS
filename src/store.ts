import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './feature/todoList';
import formReducer from './feature/formTitle';
import themeReducer from './feature/themeList';
import { saveToLocalStorage, loadFromLocalStorage } from './helpers/storage';

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		formTitle: formReducer,
		themeList: themeReducer
	},
	preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState 	= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

