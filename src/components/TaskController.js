import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import "./../App.css";

const TaskController = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const updateTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTaskList([
      ...taskList,
      { task: task, id: uuidv4(), isCompleted: false },
    ]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const editTaskList = (id, editedTask) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, task: editedTask } : task
      )
    );
  };

  return (
    <div className="main">
      <h1>To Do List</h1>
      <div className="main-input-area">
        <input autoFocus value={task} onChange={updateTask}></input>
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {taskList.map((todo) => {
          return (
            <Task
              key={todo.id}
              taskObject={todo}
              deleteTask={deleteTask}
              editTaskList={editTaskList}
            />
          );
        })}
      </div>
      ** After completing your task, click on the relevant task line to indicate
      that you have completed the task.
    </div>
  );
};

export default TaskController;
