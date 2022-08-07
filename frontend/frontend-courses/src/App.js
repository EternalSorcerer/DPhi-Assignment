import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logout from './components/Logout';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import { useState } from 'react';

function App() {
  const loggedin = false;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login loggedIn={loggedin}/>} />
            <Route path = "/logout" element={<Logout loggedIn={loggedin}/>}/>
            <Route path = "/courses" element={<Courses />}/>
            <Route path = "/add-course" element={<AddCourse loggedIn={loggedin}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
