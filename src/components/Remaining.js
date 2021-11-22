import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
	const { expenses, budget } = useContext(AppContext);

	const totelexpenses = expenses.reduce((total, item) => {
		return total = total + item.cost;
	},0);

	const alertType = totelexpenses > 10000 ? 'alert-danger' : 'alert-success'

	return(
		<div className={`alert ${alertType}`}>
			<span>Remaining: ₹{budget - totelexpenses}</span>
		</div>
		);
};

export default Remaining;