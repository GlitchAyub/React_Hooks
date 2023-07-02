import React, { useRef } from 'react'

export const UseRef = () => {
    const inputRef = useRef(null);
    const onClick = ()=>{
        inputRef.current.value =  "";
    }
  return (
    <div>
        <h1>Akaza</h1>
        <input type='text' placeholder='Ex....' ref={inputRef}/>
        <button onClick={onClick}>Change name</button>

    </div>
  )
}
