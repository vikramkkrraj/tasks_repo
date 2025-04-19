

const TaskList = () => {
  const tasks = ReactRedux.useSelector(state => state.tasks);
  const [task, setTask] = React.useState("");
  const dispatch = ReactRedux.useDispatch();

  const addHanlder = () => {
    if(!task.trim()) {
        alert("Please Enter a task");
        return;
    }
    dispatch(addTask(task));
    setTask("")

  };

  return (
    <>
      <h1>Task List</h1>
      <div className="add-task">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a Task"
          onKeyPress={(e) => e.key === "Enter" && addHanlder()}
        />

        <button onClick = {addHanlder}> Add Task</button>
      </div>
      <ul className="task-list">
        {
            tasks?.map((task) => (
                <Task key={task.id} task={task} />
            ))
        }
      </ul>
    </>
  );
};
