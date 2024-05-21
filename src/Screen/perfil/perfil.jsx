import React from 'react';
import './perfil.css';

function App() {
  return (
    <div className="welcome-container">
      <h1>Perfil</h1>
      <p>Bienvenido a mi app donde podrás consultar temas interesantes</p>
      <div className="buttons-container">
        <button className="primary-button">Ir al listado de temas</button>
        <button className="secondary-button">Más sobre mí</button>
      </div>
    </div>
  );
}

export default App;