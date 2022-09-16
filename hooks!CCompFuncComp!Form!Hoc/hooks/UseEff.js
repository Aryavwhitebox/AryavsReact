import React,{useState,useEffect} from 'react'

const UseEff = () => {
    const [num, setNum] = useState(0);
    useEffect(
        ()=>{console.log('useeffect hook');}
    )
    const handleInc=()=>{
        setNum(num+1);
    }

     return(
            <div>
                  <h1>{num}</h1> 
    <button onClick={handleInc}>increment</button>
            </div>
        );
    }
 
export default UseEff