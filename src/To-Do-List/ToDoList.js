import React, { useState } from 'react';
import './StyleToDoList.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const handleInputChange = (e) => setTask(e.target.value);

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        const newTask = tasks.filter((_, i) => i !== index);
        setTasks(newTask);
    };

    return (
        <div className='ToDo-Wrap'>
            <div className='ToDo-Container'>
                <h1>To-Do List</h1>
                <div className='Space-User'>
                    <input 
                        type='text' 
                        placeholder='Add a new task' 
                        value={task} 
                        onChange={handleInputChange} 
                    />
                    <button onClick={addTask}>Add Task</button>
                </div>
                <ul className='ToDo-Form'>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
