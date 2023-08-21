import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { ITodo } from "../../App";

const TodoDetailPage = () => {
  const params = useParams();
  const todoList = JSON.parse(localStorage.getItem("todoList") || "[]");
  const todo = todoList.find((todo: ITodo) => todo.id === params.todoId);
  if (!todo) return <Navigate to="/" replace={true}></Navigate>;

  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.value}</p>
    </div>
  );
};

export default TodoDetailPage;
