import React,{useState} from 'react'
const Fom1 = () => {
    const [name,setname]=useState("");
const handleSubmit=(event)=>{
    event.preventDefault();
    alert(  `the name enterned was' ${name}`)
}
  return (

    <div>
    <form onSubmit={handleSubmit}>
    <label>
        Enter your name:
        <input
        type='text'
        value={name}
        onChange={(e)=>
            setname(e.target.value)}/>

        </label>
        <input type='submit'/>
        </form>
        </div>
  )
}

export default Fom1