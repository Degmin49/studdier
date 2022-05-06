import './App.css';
import Courses from './components/Courses';
import 'bootstrap/dist/css/bootstrap.css';

const baseUrl = window.location.protocol + "//" + window.location.host + "/";

function App() {
  localStorage.setItem('role','admin');
  
  return (
    <div className='App'>
      <Courses />
    </div>
  );
}

export default App;
