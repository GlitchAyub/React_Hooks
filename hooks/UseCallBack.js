import React, { useCallback, useState } from 'react'
import { Child } from './components/Child'

export const UseCallBack = () => {
    const[data,setData]=useState("Hello I watch Anime")
    const[toggle,setToggle]=useState(false)
    const returnComment = useCallback( (name)=>{
        return data+name;
    },[data])
  return (
    <>
    <Child returnComment = {returnComment}/>
    <button onClick={()=>{setToggle(!toggle)}}>toggle</button>
    <br/>
    {toggle && <h1>So...?</h1>}
    </>
  )
}
