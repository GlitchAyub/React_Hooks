import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [data,setData]=useState('');
    const [toggle,setToggle]=useState(false);
   
    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/comments").then((res)=>{setData(res.data)})
    },[])

    const findLongestName=(comments)=>{
        if(!comments) return null;
        let longestName ="";

        for(let i = 0;i<comments.length; i++){
            let currentName  = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log('This was Computed');
        return longestName;
    }
    const getLongestData = useMemo(()=>findLongestName(data),[data])
  return (
    <>
    {getLongestData}
    <br/>
    <button onClick={()=>{setToggle(!toggle)}}>toggle</button>
    {toggle && <h1>Hello</h1>}
 
    </>
  )
}

export default UseMemo