const { useReducer } = React;


const initail = {count:0}
const reducer = (state, action) => {
    switch(action.type){
        case  "INCREMENT" :
            return {count : state.count+1}
        case "DECREMENT" :
            return {count : state.count-1};
        case "RESET" :
            return {count : 0}
        default :
           return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initail)
    return (
        <div>
            <h1>Counter : {state.count}</h1>
            <button onClick ={() => dispatch({ type: "INCREMENT"})}>INCREMENT </button>
            <button onClick ={() => dispatch({ type: "DECREMENT"})}>DECREMENT </button>
            <button onClick ={() => dispatch({ type: "RESET"})}>RESET </button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)