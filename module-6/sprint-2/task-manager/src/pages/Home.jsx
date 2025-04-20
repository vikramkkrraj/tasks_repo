import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>My Tasks</h1>
        <Link to="/add" className="add-btn">+ Add Task</Link>
      </div>
      <TaskList />
    </div>
  );
}

export default Home;