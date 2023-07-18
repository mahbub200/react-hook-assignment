import  { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', description: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    if (newTask.name.trim() !== '' && newTask.description.trim() !== '') {
      setTasks([...tasks, { ...newTask, completed: false }]);
      setNewTask({ name: '', description: '' });
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      
      <div>
        <input
          type="text"
          name="name"
          value={newTask.name}
          onChange={handleInputChange}
          placeholder="Enter task name"
        />
        <br />
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Enter task description"
        />
        <br />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            id='task'
            className={task.completed ? 'completed' : ''}
          >
            <div>
              <span className="task-name">{task.name}</span>
            </div>
            <div className="task-description">{task.description}</div>
            <button
              className="complete-button"
              onClick={() => handleToggleComplete(index)}
            >
              {task.completed ? 'Incomplete' : 'Complete'}
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default TodoList;
