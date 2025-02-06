import { useSelector } from "react-redux";
import "./App.css";
import TodoForn from "./component/TodoForn";
import { useEffect } from "react";
import TodoList from "./component/TodoList";

function App() {
  const todo = useSelector((state) => state.todo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <TodoForn />
      <TodoList />
    </>
  );
}

export default App;
