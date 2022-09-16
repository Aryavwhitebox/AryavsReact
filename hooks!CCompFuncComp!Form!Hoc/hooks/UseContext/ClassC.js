import React, { useContext } from 'react'
import { july } from './ClassA'
const ClassC = () => {
    const name=useContext(july)
  return (
    <div>
        <h1>hello {name}</h1>
    </div>
  )
}

export default ClassC