import { useReducer } from "react"
import React from 'react'
const reducer=(state,action)=>{
    console.log(state,action);
    return state+1;
}
const UseRed = () => {
    const [state, dispatch] = useReducer(reducer,0);
  return (
  <div>
     <h1>{state}</h1>
   <button onClick={()=>dispatch({type:'started incrementation'})}>increment</button>
  </div>
  )
}

export default UseRed