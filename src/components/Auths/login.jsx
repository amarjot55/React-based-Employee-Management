import React from 'react'
import { useState } from 'react';

const login = ({handleLogin}) => {
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
  
    setEmail('')
    setPassword('')
  }
    
  return (
    
    <div className='flex justify-center items-center h-screen bg-black-100'>
     <div className='text-white border-2 border-green-600 rounded-lg p-6 bg-black shadow-md'>
        <form 
      onSubmit={(e) => {submitHandler(e)}}
        
        className='flex flex-col justify-center items-center '>

            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required type="email"  placeholder='Enter your email' className='placeholder:text-gray-400 outline-none bg-transparent border-2 border-emerald-600 rounded-full p-2 mb-4 w-full ' />
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" required placeholder='Enter your password' className='placeholder:text-gray-400 outline-none bg-transparent border-2 border-emerald-600 rounded-full p-2 mb-4 w-full  ' />
            <button className='bg-emerald-600 text-white rounded-full p-2 w-full hover:bg-emerald-700 transition duration-300'>Login</button>
        </form>
     </div>
    </div>
  )
}

export default login
