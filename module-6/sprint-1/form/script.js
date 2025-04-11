const initail = { email: "", password: "" };
const reduce = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initail;
    default:
      throw new Error("invalid action type");
  }
};
const App = () => {
  const [state, dispatch] = React.useReducer(reduce, initail);
  const [submitted, setSubmitted] = React.useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (state.email.trim() == "" && state.password.trim() == "") {
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Enter email"
          value={state.email}
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
        />
        <br />
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "reset" });
            setSubmitted(false);
          }}
        >
          Reset
        </button>
      </form>

      {!submitted ? (
        <div>No details found</div>
      ) : (
        <div>
          <div>User Email : {state.email}</div>
          <div>User Password : {state.password}</div>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
