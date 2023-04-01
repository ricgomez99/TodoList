import { configureStore } from "@reduxjs/toolkit";
import listenerMiddleware from "./middleware";
import Reducer from "./reducer";

export const store = configureStore({
  reducer: {
    app: Reducer,
  },
  middleware: (
    getDefaultMiddleware //Combine middleware with Redux middleware
  ) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
