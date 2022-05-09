import React, { Component }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import AllCourses from './components/AllCourses';
import MyCourses from './components/MyCourses';
import CourseDetails from './components/CourseDetails';
import Calendar from './components/Calendar';
import Payment from './components/Payment';

const baseUrl = window.location.protocol + "//" + window.location.host + "/";

function App() {
  // if (baseUrl === window.location.href){
  //   window.location.replace("/AllCourses"); //ZRÓB STRONE POWITALNĄ
  // }

  //localStorage.setItem('role','admin');
  //localStorage.setItem('role','teacher');
  //localStorage.setItem('role','student');
  localStorage.setItem('role','visitor');
  
  return (
    <div className='App'>
      <Router>
        <Navbar bg='dark' variant='dark' sticky='top' expand='lg' collapseOnSelect>
          <div className='container'>
          <Navbar.Brand>
            {/* <img src={logo} /> */}
            Studdier.com
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              {/* All */}
              <Nav.Link as={Link} to={"/AllCourses"}>Przeglądaj</Nav.Link>
              <Nav.Link as={Link} to={"/CourseDetails"}>Dane o kursie</Nav.Link>
              <Nav.Link as={Link} to={"/Calendar"}>Kalendarz wizyt</Nav.Link>
              {/* Student && Teacher */}
              <Nav.Link as={Link} to={"/MyCourses"}>Moje kursy</Nav.Link>
              <Nav.Link as={Link} to={"/Payment"}>Płatności</Nav.Link>



              {/* All */}
              {/* <NavDropdown title='KONTO'>
                <NavDropdown.Item as={Link} to={"/Settings"}>Ustawienia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/Login"}>Zaloguj</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Logout"}>Wyloguj</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Register"}>Zarejestruj</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
        <Routes>
          <Route path="/AllCourses" element={<AllCourses/>} />
          <Route path="/MyCourses" element={<MyCourses/>} />
          <Route path="/CourseDetails" element={<CourseDetails/>} />
          <Route path="/Calendar" element={<Calendar/>} />
          <Route path="/Payment" element={<Payment/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
