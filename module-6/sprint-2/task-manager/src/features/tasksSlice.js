import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { database } from '../firebase/firebase';

const API_BASE_URL = 'YOUR_FIREBASE_DB_URL/tasks';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}.json?orderBy="userId"&equalTo="${userId}"`);
      const tasks = [];
      for (const key in response.data) {
        tasks.push({ id: key, ...response.data[key] });
      }
      return tasks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}.json`, taskData);
      return { id: response.data.name, ...taskData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, taskData }, { rejectWithValue }) => {
    try {
      await axios.patch(`${API_BASE_URL}/${id}.json`, taskData);
      return { id, ...taskData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}.json`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    itemsPerPage: 5,
    sortBy: 'dueDate',
    sortOrder: 'asc',
    filter: 'all'
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      });
  }
});

export const { setCurrentPage, setSort, setFilter } = tasksSlice.actions;

export const selectFilteredSortedTasks = (state) => {
  const { tasks, filter, sortBy, sortOrder } = state.tasks;
  
  // Filter tasks
  let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filter.startsWith('priority:')) {
    const priority = filter.split(':')[1];
    filteredTasks = tasks.filter(task => task.priority === priority);
  }

  // Sort tasks
  return [...filteredTasks].sort((a, b) => {
    if (sortBy === 'priority') {
      const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return sortOrder === 'asc' 
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    } else {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    }
  });
};

export const selectPaginatedTasks = (state) => {
  const filteredSortedTasks = selectFilteredSortedTasks(state);
  const { currentPage, itemsPerPage } = state.tasks;
  const startIndex = (currentPage - 1) * itemsPerPage;
  return filteredSortedTasks.slice(startIndex, startIndex + itemsPerPage);
};

export const selectTotalPages = (state) => {
  const filteredSortedTasks = selectFilteredSortedTasks(state);
  const { itemsPerPage } = state.tasks;
  return Math.ceil(filteredSortedTasks.length / itemsPerPage);
};

export default tasksSlice.reducer;