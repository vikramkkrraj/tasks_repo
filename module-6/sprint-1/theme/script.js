const { useReducer, useState } = React;

const initalvalue = { theme: "light" };
const reduce = (state, action) => {
    if(action.type =="TOGGLE_THEME") {
        return {theme : state.theme == "light" ? "dark" : "light"}
    }
    return state;
};

const Theme = () => {
  const [state, dispatch] = useReducer(reduce, initalvalue);
  const divStyle = {
    backgroundColor: state.theme === 'light' ? '#ffffff' : '#222222',
    color: state.theme === 'light' ? '#000000' : '#ffffff',
    height: '100vh',
    
}
  return (
    <>
      <div
        style={divStyle}
      > <button style={{cursor : "pointer"}} onClick={() => dispatch({type : "TOGGLE_THEME"})}>toggle</button>
       </div>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>hello from react</h1>
      <h2 onClick={() => setCount(count + 1)}>Count : {count}</h2>
      <Theme />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
