import React, { useEffect } from 'react'

export const Child = ({returnComment}) => {
    useEffect(()=>{
        console.log(
            "Function is called"
        );
    },[returnComment])
  return (
    <div>{returnComment( ' Akaza')}</div>
  )
}
