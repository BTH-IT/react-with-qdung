import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useAppDispatch } from "../../utils/redux-helper";
import { addTodoThunk } from "../../redux/todos/todoThunk";
import { v4 as uuidv4 } from "uuid";
import { FormEvent, useState } from "react";

const AddInput = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const handleAddTodoList = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      value,
      isDone: false,
    };

    dispatch(addTodoThunk(todo));
    setValue("");
  };

  return (
    <form
      className="flex gap-2 mx-auto max-w-[400px] w-full"
      onSubmit={handleAddTodoList}
    >
      <input
        type="text"
        className="w-full p-3 transition-all border border-gray-300 rounded-md outline-none focus:border-cyan-500"
        placeholder="Adding todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center gap-1 p-3 text-white transition-all border-black rounded-md outline-none cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:brightness-110"
      >
        <PlusCircleIcon className="w-6 h-6" />
        Add
      </button>
    </form>
  );
};

export default AddInput;
