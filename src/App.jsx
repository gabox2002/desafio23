import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">      
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 && <h5>Pendientes</h5>}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;