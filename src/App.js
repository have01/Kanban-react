import './App.css';
import JobBoard from './components/JobBoard';
import Kanban from './components/Kanban';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JobBoard />
      <Kanban />
    </div>
  );
}

export default App;
