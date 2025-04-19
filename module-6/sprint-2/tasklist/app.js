const { Provider } = ReactRedux;


const App = () => {
    return (
        <Provider store = { store }>
            <TaskList />
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render( <App />)