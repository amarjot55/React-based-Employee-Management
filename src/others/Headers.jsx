import React from 'react'

const Headers = ({data}) => {
 
  const logOutUser = () => {
    localStorage.removeItem('employee');
    localStorage.removeItem('admin');
    window.location.href = '/';
  }

  return (
    <div className='flex justify-between items-end ' >
      <h1 className="text-white text-2xl font-medium" >Hello <br/> <span className='text-3xl font-semibold' >{data.first_name} 👋 </span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white text-lg px-5 py-4 rounded-2xl'>Log Out</button>
    </div>
  )
}

export default Headers
