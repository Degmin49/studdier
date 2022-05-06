import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllCourses from './components/AllCourses';
import MyCourses from './components/MyCourses';

const baseUrl = window.location.protocol + "//" + window.location.host + "/";

function App() {
  //localStorage.setItem('role','admin');
  localStorage.setItem('role','teacher');
  //localStorage.setItem('role','student');
  //localStorage.setItem('role','visitor');
  
  return (
    <div className='App'>
      {/* <AllCourses /> */}
      <MyCourses />
    </div>
  );
}

export default App;
