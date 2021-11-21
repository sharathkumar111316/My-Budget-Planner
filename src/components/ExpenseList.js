import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
	const expenses = [
			{id: 14526 ,name:"Shopping" ,cost: 3000 },
			{id: 14526 ,name:"Holiday" ,cost: 500 },
			{id: 14785 ,name:"Transportation" ,cost: 2000},
			{id: 12546 ,name:"Fuel" ,cost: 2000},
			{id: 12365 ,name:"Child Care" ,cost: 8000}
	];
	return (
		<ul className='list-group mt-3 mb-3'>
		{expenses.map((expense) => (
			<ExpenseItem 
			id={expense.id} 
			name={expense.name} 
			cost={expense.cost} />
			))}
 		</ul>
		);
};

export default ExpenseList;