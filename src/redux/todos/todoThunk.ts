import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITodo } from "../../App";
import todoApi from "../../services/todoService";

export const fetchTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkAPI) => {
    try {
      const res = await todoApi.getAll();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchTodoById = createAsyncThunk(
  "todos/getTodoById",
  async (id: string, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4444/api/todos/" + id);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTodoThunk = createAsyncThunk(
  "todos/addTodo",
  async (todo: ITodo, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4444/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTodoThunk = createAsyncThunk(
  "todos/updateTodo",
  async (todo: ITodo, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4444/api/todos", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4444/api/todos/" + id, {
        method: "DELETE",
      });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
