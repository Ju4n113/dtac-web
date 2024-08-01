import React from 'react';
import '../App.css';
import construccion from '../img/construccion.png';

function Deliveries() {
  return (
    <div className="deliveries">
      {/* <h2>Entregas</h2> */}
      <img src={construccion} alt="construccion" />
      <div className="pending-deliveries">
        {/* <h3>Sin entregar</h3> */}
        {/* Aquí puedes mapear las entregas pendientes */}
      </div>
      <div className="submitted-deliveries">
        {/* <h3>Entregadas</h3> */}
        {/* Aquí puedes mapear las entregas completadas */}
      </div>
    </div>
  );
}

export default Deliveries;
