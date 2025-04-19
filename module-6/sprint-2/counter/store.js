const { configureStore } = RTK;

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})