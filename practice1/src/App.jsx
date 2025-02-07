import { useEffect } from "react";
import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { useSelector } from "react-redux";

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
