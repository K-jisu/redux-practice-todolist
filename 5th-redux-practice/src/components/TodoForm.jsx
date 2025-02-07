import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState({
    id: null,
    title: "",
    content: "",
    isDone: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputValue((prev) => {
      return { ...prev, [id]: value, id: new Date().getTime() };
    });
  };

  const handleSubmit = () => {
    dispatch(addTodo(inputValue));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          title{" "}
          <input
            type="text"
            id="title"
            value={inputValue.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          content{" "}
          <input
            type="text"
            id="content"
            value={inputValue.content}
            onChange={handleChange}
          />
        </label>
        <button>제출</button>
      </form>
    </div>
  );
};

export default TodoForm;
