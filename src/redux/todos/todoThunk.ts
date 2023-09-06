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
      const res = await todoApi.getTodoById(id);
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
      await todoApi.createTodo(todo);
      return todo;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTodoThunk = createAsyncThunk(
  "todos/updateTodo",
  async (todo: ITodo, thunkAPI) => {
    try {
      await todoApi.updateTodo(todo);
      return todo;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string, thunkAPI) => {
    try {
      await todoApi.deleteTodo(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
