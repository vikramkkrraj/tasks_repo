const TaskManager = () => {
  const [task, setTask] = React.useState({ title: "", prio: "", isComp: false });
  const [allTasks, setAllTasks] = React.useState([]);
  const [filterPrio, setFilterPrio] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("");

  const inputHandler = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const priorityHandler = (e) => {
    setTask({ ...task, prio: e.target.value });
  };

  const addTaskHandler = () => {
    if (!task.title || !task.prio) {
      alert("Please enter a task and select a priority");
      return;
    }
    const newTasks = [...allTasks, task];
    setAllTasks(sortTasks(newTasks));
    setTask({ title: "", prio: "", isComp: false });
  };

  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.prio] - priorityOrder[a.prio];
    });
  };

  const toggleCompletion = (index) => {
    const updatedTasks = allTasks.map((task, i) =>
      i === index ? { ...task, isComp: !task.isComp } : task
    );
    setAllTasks(updatedTasks);
  };

  const removeTaskHandler = (index) => {
    setAllTasks(allTasks.filter((_, i) => i !== index));
  };

  const applyFilters = () => {
    return allTasks.filter((task) => {
      if (filterPrio && task.prio !== filterPrio) return false;
      if (filterStatus === "completed" && !task.isComp) return false;
      if (filterStatus === "incomplete" && task.isComp) return false;
      return true;
    });
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          value={task.title}
          placeholder="Enter task"
          onChange={inputHandler}
        />
        <select value={task.prio} onChange={priorityHandler}>
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={addTaskHandler}>Add Task</button>
      </div>

      <div className="filters">
        <select onChange={(e) => setFilterPrio(e.target.value)} value={filterPrio}>
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <ul className="task-list">
        {applyFilters().map((task, i) => (
          <li key={i} className={`task-item ${task.prio === "high" ? "high-priority" : ""}`}>
            <button className="toggle-btn" onClick={() => toggleCompletion(i)}>
              {task.isComp ? "✔" : "✖"}
            </button>
            <span className="task-title">{task.title} - {task.prio}</span>
            <button className="remove-btn" onClick={() => removeTaskHandler(i)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
   ReactDOM.createRoot(document.getElementById('root')).render( <TaskManager />)