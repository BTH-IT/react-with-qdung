import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ITodo } from "../../App";
import { fetchTodos } from "./todoThunk";

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
  reducers: {
    getTodos: (state) => {},
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.data = [...state.data, action.payload];
    },
    updateTodo: (state) => {},
    deleteTodo: (state, action: PayloadAction<number>) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = [...action.payload];
    });
  },
});

// Action creators are generated for each case reducer function
export const { getTodos, updateTodo, deleteTodo, addTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todos;
const todoReducer = todoSlice.reducer;
export default todoReducer;
