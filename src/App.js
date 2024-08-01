import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Content from './components/Content';
import Deliveries from './components/Deliveries';
import Exercise from './components/Exercise';
import Profile from './components/Profile';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      {window.location.pathname !== '/' && <NavBar />} {/* Condición para no renderizar NavBar en Login */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/exercise/:id" element={<Exercise />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
