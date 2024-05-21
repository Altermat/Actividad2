import React from 'react';
import './tareas.css';

function Tareas({ onBack }) {
  return (
    <div className="tasks-container">
      <h2>Mis Tareas</h2>
      <ul className="tasks-list">
        <li className="task-item">Tarea 1: Descripción de la tarea 1</li>
        <li className="task-item">Tarea 2: Descripción de la tarea 2</li>
        <li className="task-item">Tarea 3: Descripción de la tarea 3</li>
        
      </ul>
      <button className="back-button" onClick={onBack}>Regresar</button>
    </div>
  );
}

export default Tareas;
