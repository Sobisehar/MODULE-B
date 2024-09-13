import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";

const Button = () => {
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(increment());
  };

  const handleAction2 = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={handleAction}>Add</button>

      <button onClick={handleAction2}>Delete</button>
    </div>
  );
};

export default Button;
