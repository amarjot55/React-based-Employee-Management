import React from 'react'

const NewTask = ({data,employeeEmail, onTaskDeleted }) => {
  function deleteTask(employeeEmail, taskTitle, onTaskDeleted) {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const emp = employees.find(e => e.email === employeeEmail);
  if (!emp) return;
  emp.tasks = emp.tasks.filter(task => task.task_title !== taskTitle);
  localStorage.setItem('employees', JSON.stringify(employees));
  if (onTaskDeleted) onTaskDeleted(); // To refresh the UI
}
  return (
    <div className='w-[300px] flex-shrink-0 h-full rounded-xl bg-violet-600'>
                <div className='flex justify-between items-center p-4'>
                    <h3  className='bg-red-400 text-sm px-3 py-1 rounded '>{data.category}</h3>
                          <h4 className='text-base'>{data.task_date}</h4>
                </div>
                <h3 className='p-3 text-2xl font-semibold'>{data.task_title}</h3>
                <p className='text-sm p-3'>{data.task_description}</p>
      <div className='flex justify-between items-center p-4'>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg mt-3'>New Task</button>
         <button
          className='bg-red-500 text-white px-4 py-2 rounded-lg mt-3'
          onClick={() => deleteTask(employeeEmail, data.task_title, onTaskDeleted)}
        >
          Delete
        </button>
      </div>
      
      </div>
  )
}

export default NewTask
