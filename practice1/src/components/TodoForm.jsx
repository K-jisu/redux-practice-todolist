import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/tosoSlice";

const TodoForm = () => {
  const [data, setData] = useState({
    id: null,
    title: "",
    content: "",
    isDone: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => {
      return { ...prev, [id]: value, id: new Date().getTime() };
    });
  };

  const handleForm = () => {
    dispatch(addTodo({ data }));
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="">
          title
          <input
            type="text"
            id="title"
            value={data.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          content
          <input
            type="text"
            id="content"
            value={data.content}
            onChange={handleChange}
          />
        </label>
        <button>제출 </button>
      </form>
    </div>
  );
};

export default TodoForm;
