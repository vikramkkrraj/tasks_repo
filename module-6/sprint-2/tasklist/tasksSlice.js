const { createSlice } = RTK;

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        name: action.payload,
        completed: false,
      };

      state.push(newTask);
    },
    toggleTask: (state, action) => {
        const task = state.find(task => task.id == action.payload);
        if(task){
            task.completed = !task.completed;
        }
    },
    removeTask(state, action) {
        return state.filter(task => task.id !=action.payload);
    },
  },
});

const { addTask, toggleTask, removeTask } = tasksSlice.actions;

const taskReducer = tasksSlice.reducer;
