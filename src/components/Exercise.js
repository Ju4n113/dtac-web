import React from 'react';
import '../App.css';

function Exercise({ match }) {
  const { id } = match.params;
  
  return (
    <div className="exercise">
      <h2>Ejercicio {id}</h2>
      {/* Aquí puedes mostrar el detalle del ejercicio */}
    </div>
  );
}

export default Exercise;
