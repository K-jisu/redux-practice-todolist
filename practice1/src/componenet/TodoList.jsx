import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/slices/TodoSlice";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todo.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
            <button>완료</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
