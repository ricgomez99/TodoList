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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
