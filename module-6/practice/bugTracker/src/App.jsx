import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import FileUpload from './components/FileUpload';
import LogTable from './components/LogTable';
import Filters from './components/Filters';
import SearchComponent from './components/SearchComponent';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <ul>
              <li><Link to="/upload">Upload Logs</Link></li>
              <li><Link to="/logs">View Logs</Link></li>
            </ul>
          </nav>

          <div className="main-content">
            <Switch>
              <Route path="/upload">
                <FileUpload />
              </Route>
              <Route path="/logs">
                <Filters />
                <SearchComponent />
                <LogTable />
              </Route>
              <Route path="/search/:devId">
                <Filters />
                <LogTable />
              </Route>
              <Route path="/">
                <div className="welcome-message">
                  <h1>Bug Tracker Pro</h1>
                  <p>Select an option from the navigation menu</p>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;