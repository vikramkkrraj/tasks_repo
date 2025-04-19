const {createSlice } = RTK;

const counterSlice = createSlice({
    name : "counter",
    initialState : 0,
    reducers : {
        incCounter : (state,action) => {
           return state = state + action.payload;
        },
        decCounter (state,action) {
           return state = state - action.payload;
        },
        reset : (state, action) => {
           return state = action.payload
        }

    }
})

const { incCounter, decCounter, reset} = counterSlice.actions;

const counterReducer = counterSlice.reducer;