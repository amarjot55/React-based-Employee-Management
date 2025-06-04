import React from 'react'

const TaskListNumbers = ({ data }) => {
  // Calculate counts
  const newTaskCount = data.tasks.filter(t => t.new_task).length;
  const completedCount = data.tasks.filter(t => t.completed).length;
  const activeCount = data.tasks.filter(t => t.active).length;
  const failedCount = data.tasks.filter(t => t.failed).length;

  return (
    <div className='flex mt-10 justify-between gap-5'>
      <div className='w-full py-6 px-9 rounded-3xl bg-red-400'>
        <h2 className='text-white text-2xl font-semibold'>{newTaskCount}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='w-full py-6 px-9 rounded-3xl bg-yellow-400'>
        <h2 className='text-white text-2xl font-semibold'>{completedCount}</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
      </div>
      <div className='w-full py-6 px-9 rounded-3xl bg-green-400'>
        <h2 className='text-white text-2xl font-semibold'>{activeCount}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className='w-full py-6 px-9 rounded-3xl bg-blue-400'>
        <h2 className='text-white text-2xl font-semibold'>{failedCount}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers