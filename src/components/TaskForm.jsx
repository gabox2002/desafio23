import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return; 
    addTask({ id: Date.now(), text: taskText });
    setTaskText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Ingrese una nueva tarea"
        value={taskText}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;