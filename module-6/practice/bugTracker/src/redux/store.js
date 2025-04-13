import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logReducer from './logsSlice.js';
import sessionReducer from "./sessionSlice.js"

const rootReducer = combineReducers({
  logs: logReducer,
  session: sessionReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;y
