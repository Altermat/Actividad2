import React, { useState } from 'react';
import './welcome.css';
import Perfil from '../perfil/perfil.jsx';
import Tareas from '../tareas/tareas.jsx';

function App() {
  const [view, setView] = useState('welcome');

  const renderView = () => {
    switch (view) {
      case 'perfil':
        return <Perfil onBack={() => setView('welcome')} />;
      case 'tareas':
        return <Tareas onBack={() => setView('welcome')} />;
      case 'welcome':
      default:
        return (
          <div className="welcome-container">
            <h1>App con React</h1>
            <p>Bienvenido a mi app donde podrás consultar temas interesantes</p>
            <div className="buttons-container">
              <button className="primary-button" onClick={() => setView('tareas')}>Ir al listado de temas</button>
              <button className="secondary-button" onClick={() => setView('perfil')}>Más sobre mí</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {renderView()}
    </div>
  );
}

export default App;
