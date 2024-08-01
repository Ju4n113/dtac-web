import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../img/logo.jpeg';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="login">
      <img src={logo} alt="Logo" />
      <h1>DTAC</h1>
      <p>Web de la materia</p>
      <button onClick={handleLogin}>Empezar</button>
      <div className="circle"></div>
    </div>
  );
}

export default Login;
