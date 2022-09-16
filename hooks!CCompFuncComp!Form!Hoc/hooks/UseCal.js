import React,{useCallback, useState }from 'react'

const functionscounter=new Set();
const UseCal = () => {
    const [count,setcount]=useState(0);
    const [othercount,setothercount]=useState(0);

    const increment=useCallback(()=>{
            setcount(count+1)},[count]);

    const incrementother=useCallback(()=>{
        setothercount(othercount+1)},[othercount])

        functionscounter.add(increment)
        functionscounter.add(incrementother)

console.log(functionscounter.size);
  return (
    <div>
    <h1>counter:{count}</h1>
    <h2>other counter:{othercount}</h2>
    <button onClick={increment}>count</button>
    <button onClick={incrementother}>other count</button>
 

    </div>
  )
}

export default UseCal