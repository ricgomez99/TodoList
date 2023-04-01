import { createSlice } from "@reduxjs/toolkit";

//Initial state property
const initialState = {
  client: { toggleForm: false, formId: undefined },
};

export const ReducerSlice = createSlice({
  name: "todoapp",
  initialState,
  reducers: {
    toggleChangeAction: (state): void | any => {
      // >> Action with current state and oposite state returned
      state.client.toggleForm = !state.client.toggleForm;
    },
    updateAction: (state, action) => {
      state.client.formId = action.payload;
    },
  },
});

//Exports the actions
export const { toggleChangeAction, updateAction } = ReducerSlice.actions;
//Exports the reducer
export default ReducerSlice.reducer;
