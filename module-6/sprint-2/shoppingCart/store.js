const {configureStore} = RTK;

const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})