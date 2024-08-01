import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Content from './components/Content';
import Deliveries from './components/Deliveries';
import Exercise from './components/Exercise';
import Profile from './components/Profile';
import Login from './components/Login';
import './App.css';

function App() {
  const location = useLocation();
  const hideNavBarPaths = ['/dtac-web/']; // Rutas donde no quieres mostrar el NavBar

  return (
    <div className="App">
    <div className="main-content">
      <Routes>
        <Route path="/dtac-web/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/exercise/:id" element={<Exercise />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      </div>
      {!hideNavBarPaths.includes(location.pathname) && <NavBar />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
