import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./../App.css";

const Task = (props) => {
  const [editingModeOn, setEditingModeOn] = useState(false);
  const [editedTask, setEditedTask] = useState("");

  const ref = useRef(null);
  const box = useRef(0);

  const refClick = () => {
    box.current.classList.value.includes("strikey")
      ? box.current.classList.remove("strikey")
      : box.current.classList.add("strikey");
  };

  const editTask = async () => {
    await setEditingModeOn(true);
    await setEditedTask(props.taskObject.task);
    ref.current.focus();
  };

  const cancelAction = () => {
    setEditingModeOn(false);
  };

  const changeTask = (e) => {
    setEditedTask(e.target.value);
  };

  const saveEditedTask = () => {
    props.editTaskList(props.taskObject.id, editedTask);
    setEditingModeOn(false);
  };

  return (
    <div>
      {editingModeOn && (
        <div className="todo-container">
          <div>
            <input
              className="todo-container-input2"
              ref={ref}
              value={editedTask}
              onChange={changeTask}
            ></input>
          </div>
          <div>
            <button onClick={saveEditedTask}>SAVE</button>
            <button onClick={cancelAction}>CANCEL</button>
          </div>
        </div>
      )}

      {!editingModeOn && (
        <div className="todo-container">
          <div className="todo-container-input" onClick={refClick} ref={box}>
            {props.taskObject.task}
          </div>
          <div>
            <button onClick={editTask}>EDIT</button>
            <button onClick={() => props.deleteTask(props.taskObject.id)}>
              DELETE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
