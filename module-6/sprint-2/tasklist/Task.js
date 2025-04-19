const Task = ({ task }) => {
  const dispatch = ReactRedux.useDispatch();
  return (
    <>
      <li className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        <span className={`task-text ${task.completed ? 'completed' : '' }`}>{task.name}</span>
        <button onClick ={() => dispatch(removeTask(task.id))}>Delete</button>
      </li>
    </>
  );
};
