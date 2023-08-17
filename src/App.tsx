import { FormEvent, useState } from "react";
import AddInput from "./components/AddInput";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";

export interface ITodo {
  id: string;
  value: string;
}

function App() {
  const [data, setData] = useState<ITodo[]>(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );

  const handleAddTodoList = (value: string) => {
    const todo = {
      id: uuidv4(),
      value,
    };

    const newData = [...data, todo];

    localStorage.setItem("todoList", JSON.stringify(newData));
    setData(newData);
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

    localStorage.setItem("todoList", JSON.stringify(newData));
    setData(newData);
  };

  const handleRemoveTodoItem = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem("todoList", JSON.stringify(newData));
    setData(newData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement)[0] as HTMLInputElement;
    const value = input.value;

    if (!value) return;

    handleAddTodoList(value);
    input.value = "";
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default App;
