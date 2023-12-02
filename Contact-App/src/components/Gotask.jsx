
import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import '../App.css';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
const Gotask = () => {
  const [tasks, setTasks] = useState([]);
  const navigate=useNavigate();
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  }

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }
  
  const [bacs, setbacs] = useState(false);
    const backk = (e) => {
        setbacs(true);
    }
    if (bacs) {
        navigate('/Home')
    }

  return (
    <>
    <Nav/>
    <h1 className='he'>To-do List</h1>
    <div className="containerr">
      <div className="row">
        <div className="col">
          <TaskForm onSubmit={addTask} />
        </div>
      </div>
      {tasks.map(task =>
        <Task
          key={task.id}
          task={task}
          onToggle={toggleComplete}
          onDelete={deleteTask}
        />
      )}
      <button onClick={backk}>back</button>
    </div>
    </>
  );
}

export default Gotask;
