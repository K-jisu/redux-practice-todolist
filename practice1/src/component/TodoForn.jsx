import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoForn = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState({
    title: "",
    id: null,
    content: "",
    isDone: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewTodo((prev) => {
      return { ...prev, [id]: value, id: new Date().getTime() };
    });
  };

  const handleSubmit = () => {
    dispatch(addTodo({ newTodo: newTodo }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          title
          <input
            id="title"
            type="text"
            value={newTodo.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          content
          <input
            id="content"
            type="textarea"
            value={newTodo.content}
            onChange={handleChange}
          />
        </label>
        <button>추가</button>
      </form>
    </div>
  );
};

export default TodoForn;
