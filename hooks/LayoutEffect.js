import React, { useEffect, useLayoutEffect, useRef } from 'react'

export const LayoutEffect = () => {
    const divRef = useRef(null);
    // uselayoutEffect will render first  than useEffect
    useEffect(()=>{
        console.log('UseEffect');
        divRef.current.value ="Akaza"
        
    },[])
    useLayoutEffect(()=>{
        console.log(divRef.current.value);
        console.log('UseLayoutEffect');   
       },[])
  return (
    
    <>
    <div>LayoutEffect</div>
    <input ref={divRef} value="Hello" />
    </>
  )
}
