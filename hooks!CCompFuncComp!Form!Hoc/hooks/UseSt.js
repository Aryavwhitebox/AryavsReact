import React, {useState} from 'react';
function UseSt(){
    //to achieve or set the state in functional components
    //we make use of useState hook
    const [counter, setState] = useState(0);
const handleInc=()=>{
    setState(counter+1);
}
 return(
        <div>
              <h1>{counter}</h1> 
<button onClick={handleInc}>increment</button>
        </div>
    );
}
export default UseSt;