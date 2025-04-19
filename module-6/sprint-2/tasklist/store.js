const { configureStore } = RTK;

const store = configureStore(
    {
        reducer : {
            tasks : taskReducer
        }
    }
)
