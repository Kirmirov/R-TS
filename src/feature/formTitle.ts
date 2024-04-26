import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormTitleState {
	strTitle: string
};

const initialState: FormTitleState = {
	strTitle: " "
}

export const formTitleSlice = createSlice({
	name: 'formTitle',
	initialState,
	reducers: {
		updateTitle: (state: FormTitleState, action: PayloadAction<string>) => {
			state.strTitle = action.payload;
		}
	},
});

export const { updateTitle } = formTitleSlice.actions;
export default formTitleSlice.reducer;

