import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
	return (
		<li className='align-items-center justify-content-between list-group-item d-flex'>
		{props.name}
			<div>
				<span className='badge alert-primary'>
					₹{props.cost}
				</span>
				<TiDelete size='1.5em'></TiDelete>
			</div>
		</li>
		);
};

export default ExpenseItem;