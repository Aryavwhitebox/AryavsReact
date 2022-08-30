
import React from 'react';
import Expenses from './components/Expenses/Expenses'
const App = () => {
  let expenses=[
    {
      id:'e1',
      title:'table',
      amount:250,
      date: new Date(2021,5,16) 
    },
    { 
      id:'e2',
      title:'chair',
      amount:230,
      date: new Date(2020,2,15)
    },
    {
      id:'e3',
      title:'tea poy',
      amount:290,
      date: new Date(2021,4,12)
    } ,
    {
      id:'e4',
      title:'rack',
      amount:350,
      date: new Date(2020,9,11)
    }
  ];
  return (
   <div>
     <h2>Expense Tracker</h2>
     <Expenses item={expenses}/>
   </div>
  );
}

export default App;
