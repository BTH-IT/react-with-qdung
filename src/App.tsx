import AppRoutes from "./Routes";

export interface ITodo {
  id: string;
  value: string;
}

function App() {
  return (
    <div className="container">
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
