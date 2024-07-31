import React from 'react';
import '../App.css';

function Profile() {
  return (
    <div className="profile">
      <h2>Perfil de usuario</h2>
      <div className="user-info">
        <img src="path/to/avatar" alt="Avatar" />
        <h3>David Rodríguez</h3>
        <p>Ingeniero de Sonido</p>
      </div>
      <div className="progress">
        <div className="progress-item">
          <h4>Ejercitaciones</h4>
          <progress value="30" max="100"></progress>
        </div>
        <div className="progress-item">
          <h4>Proyecto final</h4>
          <progress value="33" max="100"></progress>
        </div>
      </div>
    </div>
  );
}

export default Profile;
