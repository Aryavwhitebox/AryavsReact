import './App.css';
import React,{useState} from 'react';

//functional component
function App() {
  return (
<div>
<h1>hoc</h1>
<HOCGreen cmp={counter}/>
<HOCRed cmp={counter}/>
</div>
    );
}

function HOCGreen(props){
  return<h2> Green<props.cmp/></h2>

}
function HOCRed(props){
  return<h2>Red<props.cmp/></h2>
}
function counter(){
  const[count,setCount]=useState(0);
  return(
    <div>
    <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>counter</button>

    </div>
  )
}
export default App;
