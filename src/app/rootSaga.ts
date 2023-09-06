import { all } from "redux-saga/effects";
import todoSaga from "../redux/todos/todoSaga";

export default function* rootSaga() {
  yield all([todoSaga()]);
}
