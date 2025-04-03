import React from "react";
import "./App.css";

const Navbar = ({ tasks }) => {
  const completed = tasks.filter(task => task.status === "completed").length;
  const ongoing = tasks.filter(task => task.status === "ongoing").length;
  const notStarted = tasks.filter(task => task.status === "not-started").length;

  return (
    <nav>
      <h2>Task Manager</h2>
      <ul>
        <li title={tasks.filter(task => task.status === "completed").map(task => task.name).join(", ")}>
          Completed: {completed}
        </li>
        <li title={tasks.filter(task => task.status === "ongoing").map(task => task.name).join(", ")}>
          Ongoing: {ongoing}
        </li>
        <li title={tasks.filter(task => task.status === "not-started").map(task => task.name).join(", ")}>
          Not Started: {notStarted}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
