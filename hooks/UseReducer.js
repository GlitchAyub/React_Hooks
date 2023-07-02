import React, { useReducer } from 'react'
const reducer = (state,action)=>{
    switch(action.type){
        case "Increment":
            return {count:state.count +1, showText:state.showText}
        case "Toggle":
            return {count:state.count, showText:!state.showText} 
        default:
            return state       
    }
}
export const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,{count:0,showText:true})
  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={
        ()=>{
            dispatch({type:"Increment"})
            dispatch({type:"Toggle"})
            }
            } >Click</button>
            <br/>
    {state.showText && <span>this is a text</span>}
    </>
  )
}
