import React, { useEffect, useState } from "react";
import { db, tasksCollection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "./firebase.config.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(tasksCollection, (snapshot) => {
      const taskList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(taskList);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async () => {
    if (!taskName.trim()) return toast.error("Task name is required!");
    await addDoc(tasksCollection, { name: taskName, status: "not-started" });
    setTaskName("");
    toast.success("Task added!");
  };

  const editTask = async (id, newName) => {
    await updateDoc(doc(db, "tasks", id), { name: newName });
    toast.info("Task updated!");
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    toast.warn("Task deleted!");
  };

  const changeStatus = async (id, status) => {
    await updateDoc(doc(db, "tasks", id), { status });
    toast.success(`Task marked as ${status}`);
  };

  return (
    <div>
      <Navbar tasks={tasks} />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.name}</span>
              <select onChange={(e) => changeStatus(task.id, e.target.value)} value={task.status}>
                <option value="not-started">Not Started</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
              <button onClick={() => editTask(task.id, prompt("New Name:", task.name))}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
