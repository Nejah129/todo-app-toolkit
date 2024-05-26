import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/slice";
import { MdDoneAll  } from "react-icons/md";
import EditTask from "./EditTask";

const TaskCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="item">
        <h1>{item.task}</h1>
        <MdDoneAll  className="icon"  style={{color:item.isDone?"green":"red"}} />
      </div>

      <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
      <button onClick={() => dispatch(completeTask(item.id))}>
        {item.isDone ? "Undo" : "Complete"}
      </button>
      <EditTask item={item} />
      <hr />
    </div>
  );
};

export default TaskCard;
