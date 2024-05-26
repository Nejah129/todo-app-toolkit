import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../redux/slice";

const AddNewTask = () => {
  const [task, setTask] = useState("hii");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      task,
      isDone: false,
    };
    dispatch(addNewTask(newTask))
    setTask("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddNewTask;
