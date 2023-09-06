import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ITodo } from "../../App";
import {
  addTodoThunk,
  deleteTodoThunk,
  fetchTodos,
  updateTodoThunk,
} from "./todoThunk";

export interface TodoState {
  data: ITodo[];
  isLoading: boolean;
}

const initialState: TodoState = {
  data: [],
  isLoading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = [...action.payload];
      state.isLoading = false;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(addTodoThunk.fulfilled, (state, action) => {
      state.data = [...state.data, action.payload];
    });

    builder.addCase(updateTodoThunk.fulfilled, (state, action) => {
      const newData = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }

        return todo;
      });

      state.data = [...newData];
    });

    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      const newData = state.data.filter((todo) => todo.id !== action.payload);
      state.data = [...newData];
    });
  },
});

// Action creators are generated for each case reducer function
export const actionsTodo = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todos;
const todoReducer = todoSlice.reducer;
export default todoReducer;
