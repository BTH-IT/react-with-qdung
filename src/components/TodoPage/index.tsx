import { useEffect } from "react";
import AddInput from "../AddInput";
import TodoItem from "../TodoItem";
import { fetchTodosPending, selectTodo } from "../../redux/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "../../app/hookSaga";

const TodoPage = () => {
  const { data } = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodosPending());
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
