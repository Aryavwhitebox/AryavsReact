import React from 'react';

import './Card.css';
const Card =(props) =>{
const classes='card ' + props.className
//by using above step we get the data from expense item child of card
//in expenseitem.js
return <div className={classes}>{props.children}</div> 
   

}
export default Card;