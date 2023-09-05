import { Routes, Route } from "react-router-dom";
import TodoPage from "../components/TodoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<TodoPage></TodoPage>}></Route>
    </Routes>
  );
};

export default AppRoutes;
