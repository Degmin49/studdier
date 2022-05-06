import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllCourses from './components/AllCourses';

const baseUrl = window.location.protocol + "//" + window.location.host + "/";

function App() {
  //localStorage.setItem('role','admin');
  //localStorage.setItem('role','teacher');
  //localStorage.setItem('role','student');
  localStorage.setItem('role','visitor');
  
  return (
    <div className='App'>
      <AllCourses />
    </div>
  );
}

export default App;
