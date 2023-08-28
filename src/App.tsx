import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

export interface IMeta {
  _limit: number;
  _totalRows: number;
  _page: number;
  title_like?: string;
  price_gte?: number;
  price_lte?: number;
}

export interface IResponse<T> {
  data: T[];
  pagination: IMeta;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/carts" element={<CartPage></CartPage>}></Route>
      <Route path="*" element={<div>Not found</div>}></Route>
    </Routes>
  );
}

export default App;
