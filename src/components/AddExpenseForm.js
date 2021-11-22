import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
      event.preventDefault();
      const expense = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost)        
      };

      dispatch({
          type:'ADD_EXPENSE',
          payload: expense,
        });

      setName('');
      setCost('');            
  };

	return (
		<form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm mt-3">
          <label for="name">Expense </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            placeHolder="Enter the expense name..."
            onChange={(event) => setName(event.target.value) }
          ></input>
        </div>
        <div className="col-sm mt-3">
          <label for="name">Cost </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            placeHolder="Enter the cost..."
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="col-sm mt-3">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
		);
};

export default AddExpenseForm;