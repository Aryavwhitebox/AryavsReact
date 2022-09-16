import React,{useState,useMemo} from 'react'

const Usemem = () => {
    const [add,setAdd]=useState(0);
    const [subtract,setSub]=useState(100);
    const mul=useMemo(function multiply(){
        console.log('im running in console');
        return add*10
        //it is returning multiples of 10 as a return type value
        
      },[add])
  return (
    <div>
        <h1>maths</h1><br/>
        {mul}<br/>
        <p2>{add}</p2><br/>
        <button onClick={()=>setAdd(add+1)}>increment</button> <br/>
        <p3>{subtract}</p3><br/>
        <button onClick={()=>setSub(subtract-1)}>decrement</button><br/>
    </div>
  )
}

export default Usemem