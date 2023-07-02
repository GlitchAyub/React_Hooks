import React, { useState } from 'react'
import '../index.css'

export const Todo = () => {

    const[input,setinput]=useState("");
    const[item,setItem]=useState([]);
    const addItem =()=>{
        if(!setinput){

        }
        else{
            setItem([...item,input])
            setinput('')
        }
    }

    const deleteItem = (id)=>{
        const updateItems = item.filter((val,ind,arr)=>{
            return ind !== id;
        })
        setItem(updateItems)
    }

    const remove = ()=>{
        setItem([]);
    }

  return (
    <>
   <div className='main'>
    <div className=' child'>
        <h1>Todo</h1>
        <div className='add-item'>
            <input type='text' placeholder="What's On your mind..?" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
            <button className='btn' onClick={addItem}>✅</button>
            </div>    
            <br/>

            <div className='show-item'>
                {
                    item.map((val,index)=>{
                        return (     
                        <div className='each-item' key={index}>
                        <h3>{ val }</h3>
                        <button className='btn'  onClick={()=>deleteItem(index)}>❌</button>
                    </div>)
                    })
                }
           
            </div>
            <br/>

            <div>
                <button className='submit-btn' onClick={remove}>check list</button>
            </div>
            <br/>
    </div>

    </div> 
    </>
  )
}
