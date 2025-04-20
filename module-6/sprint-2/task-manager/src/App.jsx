import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {PrivateRoute} from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path="/add" element={
        <PrivateRoute>
          <AddTask />
        </PrivateRoute>
      } />
      <Route path="/edit/:id" element={
        <PrivateRoute>
          <EditTask />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;