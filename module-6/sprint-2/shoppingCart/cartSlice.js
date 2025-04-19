const { createSlice } = RTK;

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItems: (state, action) => {
      const item = state.items.find((item) => item.id == action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        const item = {
          ...action.payload,
          quantity: 1,
        };
        state.items.push(item);
      }

      state.total = state.items
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
    },
    removeItems: (state, action) => {
      //   const item = state.items.find((item) => item.id == action.payload);
      //   if(item){
      //  const filteredItems = state.items.filter((item) => item.id != action.payload);
      //  state.items = [...filteredItems];
      //   }

      const index = state.items.findIndex((item) => item.id == action.payload);

      if (index >= 0) {
        state.items.splice(index, 1);
      }
      state.total = state.items
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
    },
    incQuantity(state, action) {
        const item = state.items.find((item) => item.id == action.payload);
        if(item) {
            item.quantity +=1;
        }
        state.total = state.items
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
    
    },
    decQuantity(state, action) {
        const item = state.items.find((item) => item.id == action.payload)
        if(item){
            item.quantity -=1;
        }
        state.total = state.items
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);

    },
  }, 
});

const { addItems, removeItems, incQuantity, decQuantity } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
