const App = () => {
  const reducer = () => {};
  const [state, dispatch] = React.useReducer(reducer, []);

  return (
    <div>
      <h1>hello from react</h1>
      <button onClick={() => dispatch({ type: "add", payload: "new task" })}>
        Add todo
      </button>

      <ul>
        {state.map((todo) => (
          <li
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "20px",
            }}
          >
            <span onClick={() => dispatch({type :'toggle' , payload : todo.id})}>{todo.name}</span>
            <button onClick={() => dispatch({ type : "delete" , payload : todo.id })}>delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
