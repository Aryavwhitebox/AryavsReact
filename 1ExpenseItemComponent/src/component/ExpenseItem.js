import './ExpenseItem.css'
function ExpenseItem(){
    let title="car insurance"
return(
    <div className='expense-item'>
        <div>24th August</div>
    <div className='expense-item_description'><h2>{title}</h2></div>
    <div className='expense-item_price'>200$</div>
    </div>
);
}
export default ExpenseItem;