import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = ({ onTaskCreated }) => {
  const navigate = useNavigate();
  const [userData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState('');
  const [taskDate, settaskDate] = useState('');
  const [assignto, setAssignto] = useState('');
  const [Category, setCategory] = useState('');
  const [taskDescription, settaskDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object
  // ...inside submitHandler...
const newTask = {
  task_title: taskTitle,
  task_date: taskDate,
  assignto,
  category: Category,
  task_description: taskDescription,
  active: false,
  new_task: true,
  completed: false,
  failed: false
};

    // Add the new task to the correct employee
    const employees = userData.employees;
    employees.forEach((emp) => {
      if (assignto === emp.first_name) {
        emp.tasks.push(newTask);
      }
    });
    localStorage.setItem('employees', JSON.stringify(employees));

    // Reset form fields
    setAssignto('');
    settaskTitle('');
    settaskDate('');
    settaskDescription('');
    setCategory('');

    // Notify parent to refresh
    if (onTaskCreated) onTaskCreated();

    // Optionally navigate
    navigate('/admin');
  };

  return (
    <div className='mt-8 bg-gray-800 p-1 rounded-md shadow-lg'>
      <form onSubmit={submitHandler}
        className='flex rounded-md w-full items-start bg-gray-800 justify-between'>
        <div className='flex flex-col gap-6 p-5 w-[100%]'>
          <div>
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              className='border-1 w-full mt-2 rounded-sm'
              type='text'
              placeholder='make a ui design'
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
              className='border-1 w-full  mt-2 rounded-sm'
              type='date'
              placeholder='2023-10-01'
            />
          </div>
          <div>
            <h3>Assign to</h3>
            <input
              value={assignto}
              onChange={(e) => setAssignto(e.target.value)}
              className='border-1 w-full  mt-2 rounded-sm'
              type='text'
              placeholder='employee name'
            />
          </div>
          <div>
            <h3>Category</h3>
            <input
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              className='border-1 w-full  mt-2 rounded-sm'
              type='text'
              placeholder='dev, design etc.'
            />
          </div>
        </div>
        <div className='flex flex-col  p-5 w-[100%]'>
          <h3>Task Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            className='border-1  mt-2 rounded-sm'
            rows='10'
            cols='30'
            placeholder='make a ui design for the tasklist'
          />
          <button className='bg-red-600 mt-1  text-white rounded-md p-2 w-[100%] hover:bg-red-700 transition duration-300'>
            Create Task
          </button>
          <button type="button" onClick={() => navigate('/admin')} className='bg-blue-600 mt-1 text-white rounded-md p-2 w-[100%] hover:bg-blue-700 transition duration-300'>
            Go to Admin Dashboard
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask