import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import TodoPage from "../components/TodoPage";
import MainLayout from "../templates/MainLayout";
import TodoDetailPage from "../components/TodoDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="/" element={<div>Hello this is homepage</div>}></Route>
        <Route
          path="/todo-with-main-layout"
          element={<TodoPage></TodoPage>}
        ></Route>
        <Route
          path="/todo-with-main-layout/:todoId"
          element={<TodoDetailPage></TodoDetailPage>}
        ></Route>
      </Route>
      <Route
        path="/todo-without-main-layout"
        element={<TodoPage></TodoPage>}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
