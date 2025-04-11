const initial = { isVisible: false };
const reduce = (state, action) => {
  if (action.type == "TOGGLE_VISIBILITY") {
    return { isVisible: !state.isVisible };
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reduce, initial);
  return (
    <div>
      <h1>Hello, React</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>
        {state.isVisible == false ? "visible" : "hide"}
      </button>
      <h1 style={{ display: state.isVisible == true ? "block" : "none" }}>
        Hello, World!
      </h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
