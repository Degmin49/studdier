import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllCourses from './components/AllCourses';
import MyCourses from './components/MyCourses';
import CourseDetails from './components/CourseDetails';
import Calendar from './components/Calendar';
import Payment from './components/Payment';

const baseUrl = window.location.protocol + "//" + window.location.host + "/";

function App() {
  //localStorage.setItem('role','admin');
  localStorage.setItem('role','teacher');
  //localStorage.setItem('role','student');
  //localStorage.setItem('role','visitor');
  
  return (
    <div className='App'>
      {/* <AllCourses /> */}
      {/* <MyCourses /> */}
      {/* <CourseDetails /> */}
      {/* <Calendar /> */}
      <Payment />
    </div>
  );
}

export default App;
