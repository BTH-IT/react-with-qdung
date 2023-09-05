import React, { FormEvent, useEffect, useState } from "react";
import AddInput from "../AddInput";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../TodoItem";
import { useAppDispatch, useAppSelector } from "../../utils/redux-helper";
import { selectTodo } from "../../redux/todos/todoSlice";
import { fetchTodos } from "../../redux/todos/todoThunk";

const TodoPage = () => {
  const { data } = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();

  const handleAddTodoList = (value: string) => {
    const todo = {
      id: uuidv4(),
      value,
      isDone: false,
    };

    dispatch(fetchTodos());
  };

  const handleUpdateTodoItem = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();

    const input = (e.target as HTMLFormElement)[0] as HTMLInputElement;
    const value = input.value;

    if (!value) return;

    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          value,
        };
      }

      return item;
    });

    // setData(newData);
  };

  const handleRemoveTodoItem = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    // setData(newData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement)[0] as HTMLInputElement;
    const value = input.value;

    if (!value) return;

    handleAddTodoList(value);
    input.value = "";
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log(data);

  return (
    <div className="flex flex-col gap-3">
      <AddInput handleSubmit={handleSubmit}></AddInput>
      <ul className="flex flex-col gap-2 mt-2">
        {data.map((item) => (
          <TodoItem
            {...item}
            key={item.id}
            handleUpdate={handleUpdateTodoItem}
            handleRemove={handleRemoveTodoItem}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
