import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removeTodo } from "../redux/slices/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
            <button onClick={() => handleComplete(todo.id)}>완료</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
