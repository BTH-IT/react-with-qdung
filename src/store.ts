import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./redux/todos/todoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
