import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="home">
      <h2>Bienvenido, David Rodríguez</h2>
      <div className="activities">
        <h3>Tus actividades esta semana</h3>
        {/* Aquí puedes mapear las actividades */}
      </div>
    </div>
  );
}

export default Home;
