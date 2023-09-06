import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ITodo } from "../../App";

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
    fetchTodosSuccess: (state, action: PayloadAction<ITodo[]>) => {
      state.data = [...action.payload];
      state.isLoading = false;
    },
    fetchTodosFailure: (state) => {
      state.isLoading = false;
    },
    fetchTodosPending: (state) => {
      state.isLoading = true;
    },
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.data = [...state.data, action.payload];
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const newData = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }

        return todo;
      });

      state.data = [...newData];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const newData = state.data.filter((todo) => todo.id !== action.payload);

      state.data = [...newData];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchTodosSuccess,
  fetchTodosFailure,
  fetchTodosPending,
  addTodo,
  updateTodo,
  deleteTodo,
} = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todos;
const todoReducer = todoSlice.reducer;
export default todoReducer;
