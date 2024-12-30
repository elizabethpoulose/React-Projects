import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(["Eat", "Sleep", "Code Everyday"]);

  const addTask = (e) => {
    if ((e.type === "click" || e.key === "Enter") && task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center flex-column">
          <h1 className="text-center text-muted mb-4">To-Do List</h1>
          <div className="mb-3">
            <label htmlFor="taskInput" className="form-label">
              Add a New Task:
            </label>
            <input
              type="text"
              placeholder="Enter task"
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={addTask}
              value={task}
              id="taskInput"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={addTask}>
            Add
          </button>

          <div className="mt-4">
            <h2 className="mb-3">Task List</h2>
            {taskList.length > 0 ? (
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {taskList.map((task, index) => (
                    <tr key={index}>
                      <td>{task}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeTask(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-muted">No tasks added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
