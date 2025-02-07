import { useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect } from "react";

function App() {
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
