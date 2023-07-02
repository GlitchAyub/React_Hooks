import React, { useState,createContext } from 'react'
import { Login } from './components/Login'
import { User } from './components/User'

export const AppContext = createContext(null);

export const UseContext = () => {
    const [ username,setUsername]=useState('')
  return (
<AppContext.Provider value={{username,setUsername}}>
    <Login />
    <User />
</AppContext.Provider>
  )
}
