import { useEffect } from "react";
import AddInput from "../AddInput";
import TodoItem from "../TodoItem";
import { useAppDispatch, useAppSelector } from "../../utils/redux-helper";
import { selectTodo } from "../../redux/todos/todoSlice";
import { fetchTodos } from "../../redux/todos/todoThunk";

const TodoPage = () => {
  const { data } = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <AddInput></AddInput>
      <ul className="flex flex-col gap-2 mt-2">
        {data.map((item) => (
          <TodoItem todo={item} key={item.id}></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
