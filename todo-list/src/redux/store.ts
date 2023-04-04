import { configureStore } from "@reduxjs/toolkit";
import listenerMiddleware from "./middleware";
import Reducer from "./reducer";

// Redux Store
export const store = configureStore({
  reducer: {
    app: Reducer,
  },
  middleware: (
    getDefaultMiddleware //Combine middleware with Redux middleware
  ) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
