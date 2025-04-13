const reduce = (state, action) => {
  switch (action.type) {
    case "fetch-start":
      return { ...state, loading: true };

    case "fetch-success":
      return { ...state, loading: false, data: action.payload };

    case "fetch-error":
      return { ...state, loading: false, data: null, error: action.payload };
    
    default : 
        return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reduce, {
    loading: false,
    data: null,
    error: null,
  });
  async function fetchData() {
    dispatch({ type: "fetch-start" });
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        const result = await res.json();
        dispatch({ type : "fetch-success" , payload : result});
    } catch (error) {
      console.log(error);
      dispatch({ type: "fetch-error" });
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>hello from react</h1>
      {state.loading && <p>Loading....</p>}
      {
        state.error && <p>{state.error }</p>
      }
      {
        state.data && (
            <div>
                <h3>{state.data.title}</h3>
                <h2>{state.data.body}</h2>
            </div>
        )
      }
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
