import React from 'react';
import Calendar from './Calendar';
import ejercitaciones from './EjercitacionesData';
import Ejercitacion from './Ejercitacion'; // Importar el componente Ejercitacion
import '../App.css';

function Home() {
  const ultimaEjercitacion = ejercitaciones[ejercitaciones.length - 1];

  return (
    <div className="home">
      <h2>Bienvenid@!</h2>
      <div className="activities">
        <h3>Actividad de esta semana</h3>
        {ultimaEjercitacion && (
          <Ejercitacion 
            titulo={ultimaEjercitacion.titulo}
            consigna={ultimaEjercitacion.consigna}
            videos={ultimaEjercitacion.videos}
            pdfs={ultimaEjercitacion.pdfs}
            powerpoints={ultimaEjercitacion.powerpoints}
          />
        )}
        <button
          className="meet-button"
          onClick={() => window.open('https://meet.google.com/your-meet-link', '_blank')}
        >
          Unirse a la clase
        </button>
      </div>
      <div className="calendar-section">
        <h3>Calendario</h3>
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
