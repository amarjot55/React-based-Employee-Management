import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { getlocalStorage, setlocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

const [userData, setuserData] = useState(null)

useEffect(() => {
  const initialLoad = localStorage.getItem('employees') === null;
  if (initialLoad) {
    setlocalStorage();
  }
  const { employees } = getlocalStorage();
  setuserData({ employees });
  
}, [])

  return (
    <div>
        <AuthContext.Provider value={[userData, setuserData]}>
            {/* Providing userData and setuserData to the context */}
      {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
