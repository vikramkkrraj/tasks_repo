
const App = () => {
    const reduce = (state,action) => {
        switch(action.type){
            case "inc" :
                return {count : state.count + 1};
            case 'dec' : 
                return {count : state.count - 1};
            case 'reset' :
                return {count : 0};
            default : 
                return state;
        }
    }
    const [state, dispatch] = React.useReducer(reduce, {count : 0})
    return (
        <div>
            <h1>Counter : {state.count }</h1>
            <button onClick={()=>dispatch({type : 'inc'})}>Add</button>
            <button onClick={() => dispatch({type:"dec"})}>Remove</button>
            <button onClick={() => dispatch({type:"reset"})}>reset</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)