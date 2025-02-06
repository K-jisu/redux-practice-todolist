import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/TodoSlice";

const TodoForm = () => {
  const [data, setData] = useState({
    id: null,
    title: "",
    content: "",
    isDone: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(data));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => {
      return { ...prev, [id]: value, id: new Date().getTime() };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          title
          <input
            id="title"
            type="text"
            value={data.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          content
          <input
            id="content"
            type="text"
            value={data.content}
            onChange={handleChange}
          />
        </label>
        <button>제출</button>
      </form>
    </div>
  );
};

export default TodoForm;
