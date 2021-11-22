import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type:'DELETE_EXPENSE',
			payload:props.id
		});
	};

	return (
		<li className='align-items-center justify-content-between list-group-item d-flex'>
		{props.name}
			<div>
				<span className='badge alert-primary'>
					₹{props.cost}
				</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
			</div>
		</li>
		);
}; 

export default ExpenseItem;