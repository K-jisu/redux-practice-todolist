import { useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect } from "react";

function App() {
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
