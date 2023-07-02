import React,{useContext} from 'react'
import { AppContext } from '../UseContext'

export const User = () => {
    const {username}=useContext(AppContext)
  return (
    <>
    <h1>User : {username} </h1>
    </>
  )
}
