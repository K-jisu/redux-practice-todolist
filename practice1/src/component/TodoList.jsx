import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removeTodo } from "../redux/todoSlice";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo({ id: id }));
  };

  const handleUpdate = (id) => {
    dispatch(completeTodo({ id: id }));
  };
  return (
    <div>
      {todo.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              backgroundColor: todo.isDone ? "red" : "yellow",
              color: "black",
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
            <button
              onClick={() => {
                handleUpdate(todo.id);
              }}
            >
              완료
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
