import React, { useRef } from 'react'
import { Button } from './Button'

export const UseImperativeHandle = () => {
    const buttonRef = useRef(null)
  return (
    <>
    <div>UseImperativeHandle</div>
    <button onClick={()=>{buttonRef.current.alterToggle()}}>ButtonFrom parent</button>
    <br/>
    <Button ref={buttonRef}/>
    </>
  )
}
