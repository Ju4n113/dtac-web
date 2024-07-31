import React from 'react';
import Ejercitacion from './Ejercitacion';
import ejercitaciones from './EjercitacionesData';
import '../App.css';

const Content = () => {
  return (
    <div className="content">
      {ejercitaciones.map((ejercitacion) => (
        <Ejercitacion 
          key={ejercitacion.id} 
          titulo={ejercitacion.titulo} 
          consigna={ejercitacion.consigna} 
          videos={ejercitacion.videos} 
          pdfs={ejercitacion.pdfs} 
          powerpoints={ejercitacion.powerpoints} 
        />
      ))}
    </div>
  );
};

export default Content;
