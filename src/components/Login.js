import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="login">
      <h1>DTAC</h1>
      <p>Web de la materia</p>
      <button onClick={handleLogin}>Empezar</button>
    </div>
  );
}

export default Login;
