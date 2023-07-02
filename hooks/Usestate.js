import React, { useState } from 'react'

export const Usestate = () => {
    const [item,setItem]=useState('')
    const setName = (e)=>{
        setItem(e.target.value)
    }
  return (
    <>
    <h1>hello {item}</h1>
    <input type='text' placeholder='enter your name' onChange={setName}/>
    </>
  )
}
