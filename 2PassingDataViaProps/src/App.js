
import ExpenseItem from './components/ExpenseItem'
function App() {
  let expenses=[
    {
      id:'e1',
      title:'school fee',
      amount:250,
      date: new Date(2021,5,16) 
    },
    { 
      id:'e2',
      title:'books',
      amount:230,
      date: new Date(2020,2,15)
    },
    {
      id:'e3',
      title:'house rent',
      amount:290,
      date: new Date(2021,4,12)
    } ,
    {
      id:'e4',
      title:'tuition',
      amount:350,
      date: new Date(2020,9,11)
    }
  ];
  return (
   <div>
     <h2>Expense Tracker</h2>
     <ExpenseItem
      date={expenses[0].date}
      title={expenses[0].title}
      amount={expenses[0].amount}>
     </ExpenseItem>
     <ExpenseItem
     date={expenses[1].date}
      title={expenses[1].title}
      amount={expenses[1].amount}>
     </ExpenseItem>
     <ExpenseItem
     date={expenses[2].date}
      title={expenses[2].title}
      amount={expenses[2].amount}>
     </ExpenseItem>
     <ExpenseItem
     date={expenses[3].date}
      title={expenses[3].title}
      amount={expenses[3].amount}>
     </ExpenseItem>
   </div>
  );
}

export default App;
