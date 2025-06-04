import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTasks = () => {
  const [userData,setuserData] = useContext(AuthContext);

   if (!userData || !userData.employees) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className='bg-gray-800 p-2 rounded-lg shadow-lg'>
      <div className='bg-red-400 flex mt-2 justify-between p-3 rounded-lg'>
        <h3 className='w-1/5 text-white text-md font-medium'>Employee</h3>
        <h3 className='w-1/5 text-white text-md font-medium'>New Task</h3>
        <h3 className='w-1/5 text-white text-md font-medium'>Active Task</h3>
        <p className='w-1/5 text-white text-md font-medium'>Completed Task</p>
        <p className='w-1/5 text-white text-md font-medium'>Failed Task</p>
      </div>
      <div>
        {userData.employees.map((emp) => {
          // Count tasks by status
          const newTaskCount = emp.tasks.filter(t => t.new_task === true).length;
          const activeCount = emp.tasks.filter(t => t.active === true).length;
          const completedCount = emp.tasks.filter(t => t.completed === true).length;
          const failedCount = emp.tasks.filter(t => t.failed === true).length;

          return (
            <div key={emp.id} className='bg-transparent border-2 border-green-800 flex mt-2 justify-between p-3 rounded-lg'>
              <h3 className='w-1/5 text-white text-xl font-medium'>{emp.first_name}</h3>
              <h3 className='w-1/5 text-white text-md font-medium'>{newTaskCount}</h3>
              <h3 className='w-1/5 text-white text-md font-medium'>{activeCount}</h3>
              <h3 className='w-1/5 text-white text-md font-medium'>{completedCount}</h3>
              <h3 className='w-1/5 text-white text-md font-medium'>{failedCount}</h3>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AllTasks