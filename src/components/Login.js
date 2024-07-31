import React from 'react';
import '../App.css';

function Login({ history }) {
  const handleLogin = () => {
    history.push('/home');
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
