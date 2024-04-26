import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDoItem } from "../models/todo-item";
import { v4 as uuid } from 'uuid';

export interface TodoState {
	aToDoItems: ToDoItem[]
};

const initialState: TodoState = {
	aToDoItems: [],
};

export const todoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		createAction: (state: TodoState, action: PayloadAction<string>) => {
			const pNewToDoItem: ToDoItem = {
				id: uuid(),
				title: action.payload,
				isDone: false
			};

			state.aToDoItems = [...state.aToDoItems, pNewToDoItem];
		},
		updateAction: (state: TodoState, action: PayloadAction<ToDoItem>) => {
			const aNewToDoItems = state.aToDoItems.map((pItem) => {
				if (pItem.id === action.payload.id) 
					pItem.isDone = !pItem.isDone;

				return pItem;
			});

			state.aToDoItems = aNewToDoItems;
		},
		deleteAction: (state: TodoState, action: PayloadAction<string>) => {
			const aNewToDoItems = state.aToDoItems.filter((pItem) => {
				return pItem.id !== action.payload;
			});
	
			state.aToDoItems = aNewToDoItems;
		},
	},
});


export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;