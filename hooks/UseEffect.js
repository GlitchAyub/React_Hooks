import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UseEffect = () => {
    const [data,setData]=useState('');
    const [count,setCount]=useState(0);
    useEffect(()=>{

        axios.get("https://api.publicapis.org/entries").then((res)=>{console.log(res.data.entries[0]
        ); console.log('api was called'); setData(res.data.entries[0].Description)})
    },[count])
  return (
    <>
    <h1>UseEffect Api : {data}</h1>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <button onClick={()=>{setCount(count-1)}}>-</button>
    </>
  )
}
