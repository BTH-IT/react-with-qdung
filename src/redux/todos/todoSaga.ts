import { call, fork, put, take, takeLatest } from "redux-saga/effects";
import todoApi from "../../services/todoService";
import {
  addTodo,
  addTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  fetchTodosFailure,
  fetchTodosPending,
  fetchTodosSuccess,
  updateTodo,
  updateTodoSuccess,
} from "./todoSlice";
import { ITodo } from "../../App";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchTodosSaga() {
  try {
    const res: ITodo[] = yield call(todoApi.getAll);
    yield put(fetchTodosSuccess(res));
  } catch (error) {
    yield put(fetchTodosFailure());
  }
}

function* watchAddTodo() {
  while (true) {
    try {
      const action: PayloadAction<ITodo> = yield take(addTodo.type);

      yield call(todoApi.createTodo, action.payload);

      yield put(addTodoSuccess(action.payload));
    } catch (error) {
      console.log(error);
    }
  }
}

function* watchUpdateTodo() {
  while (true) {
    try {
      const action: PayloadAction<ITodo> = yield take(updateTodo.type);

      yield call(todoApi.updateTodo, action.payload);

      yield put(updateTodoSuccess(action.payload));
    } catch (error) {
      console.log(error);
    }
  }
}

function* watchDeleteTodo() {
  while (true) {
    try {
      const action: PayloadAction<string> = yield take(deleteTodo.type);

      yield call(todoApi.deleteTodo, action.payload);

      yield put(deleteTodoSuccess(action.payload));
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* todoSaga() {
  yield takeLatest(fetchTodosPending.type, fetchTodosSaga);
  yield fork(watchAddTodo);
  yield fork(watchUpdateTodo);
  yield fork(watchDeleteTodo);
}
