import React from 'react';
import './perfil.css';

function Perfil({ onBack }) {
  return (
    <div className="profile-container">
      <h2>Mi Perfil</h2>
      <p>Aquí puedes encontrar información sobre mí.</p>
      <button className="back-button" onClick={onBack}>Regresar</button>
    </div>
  );
}

export default Perfil;
