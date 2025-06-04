import React from 'react'
import Headers from '../../others/Headers'
import CreateTask from '../../others/CreateTask'
import AllTasks from '../../others/AllTasks'

const AdminDashboard = (userData) => {
  return (
    <div className='h-screen w-full p-10'>
      <Headers data={userData}/>
     <CreateTask data={userData} />
     <AllTasks data={userData}/>
    </div>
  )
}

export default AdminDashboard
