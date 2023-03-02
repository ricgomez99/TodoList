import { createSlice } from "@reduxjs/toolkit";

//Initial state property
const initialState = {
  client: { toggleForm: false },
};

export const ReducerSlice = createSlice({
  name: "todoapp",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      // >> Action with current state and oposite state returned
      state.client.toggleForm = !state.client.toggleForm;
    },
  },
});

//Exports the actions
export const { toggleChangeAction } = ReducerSlice.actions;
//Exports the reducer
export default ReducerSlice.reducer;
