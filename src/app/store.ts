import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../redux/todos/todoSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import logger from "redux-logger";

const rootReducer = combineReducers({
  todos: todoReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
