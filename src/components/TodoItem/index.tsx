import { FormEvent, useState } from "react";
import { ITodo } from "../../App";
import styled from "styled-components";
import {
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const StyledTodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
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

interface ITodoItem extends ITodo {
  handleUpdate: (e: FormEvent<HTMLFormElement>, id: string) => void;
  handleRemove: (id: string) => void;
}

const TodoItem = (props: ITodoItem) => {
  const [edit, setEdit] = useState(false);
  return (
    <StyledTodoItem>
      {edit ? (
        <>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              props.handleUpdate(e, props.id);
              setEdit(false);
            }}
          >
            <input
              type="text"
              className="w-full p-3 transition-all border border-gray-300 rounded-md outline-none focus:border-cyan-500"
              placeholder="Adding todo..."
              defaultValue={props.value}
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
          <span>{props.value}</span>
          <div className="flex gap-2 transition-all todo-actions">
            <PencilSquareIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setEdit((prev) => !prev)}
            ></PencilSquareIcon>
            <TrashIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => props.handleRemove(props.id)}
            ></TrashIcon>
          </div>
        </>
      )}
    </StyledTodoItem>
  );
};

export default TodoItem;
