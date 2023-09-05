import AppRoutes from "./Routes";

export interface ITodo {
  id: string;
  value: string;
  isDone: boolean;
}

function App() {
  return (
    <div className="container">
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
