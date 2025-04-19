const { Provider,useSelector,useDispatch } = ReactRedux;


const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <>
        <h1>Counter : {counter}</h1>
        <button onClick={() => dispatch(incCounter(1))}>Inc</button>
        <button onClick={() => dispatch(decCounter(1))}>Dec</button>
        <button onClick={() => dispatch(reset(0))}>Reset</button>
        </>
    )
}

const App = () => {
    
  return (
    
      <Provider store={store}>
        <Counter />
      </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
