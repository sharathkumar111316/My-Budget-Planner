import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);
	const totelexpenses = expenses.reduce((total, item) => {
		return total = total + item.cost;
	},0);

	return(
		<div className='alert alert-primary'>
			<span>Total expenses: ₹{totelexpenses}</span>
		</div>
		);
};

export default ExpenseTotal;