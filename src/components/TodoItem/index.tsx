import { useState } from "react";
import { ITodo } from "../../App";
import styled from "styled-components";
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useAppDispatch } from "../../utils/redux-helper";
import { deleteTodoThunk, updateTodoThunk } from "../../redux/todos/todoThunk";

const StyledTodoItem = styled.li<{ isdone: 1 | 0 }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ isdone }) => (isdone ? "#4ade80" : "black")};
  background-color: ${({ isdone }) => (isdone ? "#d1fae5" : "transparent")};
  border-radius: 6px;
  padding: 10px;
  gap: 10px;

  &:hover .todo-actions {
    display: flex;
  }

  .todo-actions {
    display: none;
  }
`;

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const [edit, setEdit] = useState(false);
  const [isDone, setIsDone] = useState(todo.isDone);
  const [value, setValue] = useState(todo.value);
  const dispatch = useAppDispatch();

  const handleDone = () => {
    setIsDone(true);

    dispatch(
      updateTodoThunk({
        ...todo,
        isDone: true,
      })
    );
  };

  return (
    <StyledTodoItem isdone={isDone ? 1 : 0}>
      {edit ? (
        <>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(
                updateTodoThunk({
                  ...todo,
                  value,
                })
              );

              setEdit(false);
            }}
          >
            <input
              type="text"
              className="w-full p-3 transition-all border border-gray-300 rounded-md outline-none focus:border-cyan-500"
              placeholder="Updating todo..."
              defaultValue={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center gap-1 p-3 text-white transition-all border-black rounded-md outline-none cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:brightness-110"
            >
              <PencilSquareIcon className="w-6 h-6 cursor-pointer"></PencilSquareIcon>
              Update
            </button>
          </form>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => setEdit(false)}
          ></XMarkIcon>
        </>
      ) : (
        <>
          <span>{todo.value}</span>
          <div className="flex gap-2 transition-all todo-actions">
            {!isDone && (
              <CheckIcon
                className="w-6 h-6 cursor-pointer"
                onClick={handleDone}
              />
            )}
            <PencilSquareIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setEdit((prev) => !prev)}
            ></PencilSquareIcon>
            <TrashIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                alert("Are you sure");
                dispatch(deleteTodoThunk(todo.id));
              }}
            ></TrashIcon>
          </div>
        </>
      )}
    </StyledTodoItem>
  );
};

export default TodoItem;
