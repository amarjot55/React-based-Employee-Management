import React from 'react'
import AcceptTask from '../components/TaskList/AcceptTask'
import NewTask from '../components/TaskList/NewTask'
import CompleteTask from '../components/TaskList/CompleteTask'
import FailedTask from '../components/TaskList/FailedTask'

const TaskList = ({data}) => {
   if (!data || !Array.isArray(data.tasks) || data.tasks.length == 0) {
    return <div className='text-white'>No Tasks Available</div>;
  }

  return (
    <div id='taskList' className='h-[60%] w-full overflow-x-auto flex items-center gap-10 justify-start  rounded-3xl p-6 mt-10'>
  {data.tasks.map((elem,idx) => {
    if (elem.active) {
      return <AcceptTask key={idx} data={elem}/>;
    }
    if (elem.new_task) {
      return <NewTask key={idx} data={elem} employeeEmail={data.email}     />;
    }
    if (elem.completed) {
      return <CompleteTask key={idx} data={elem}/>;
    }
    if (elem.failed) {
      return <FailedTask key={idx} data={elem}/>;
    }
    return <div className='text-white'>No Tasks Available</div>;
  })}
    
     {/* <AcceptTask />
     <NewTask />
     <CompleteTask />
     <FailedTask /> */}
    
     
        </div>
    
  )
}

export default TaskList
