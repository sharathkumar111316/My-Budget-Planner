import React from 'react';

const AddExpenseForm = () => {
	return (
		<form>
      <div className="row">
        <div className="col-sm mt-3">
          <label for="name">Expense </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
          ></input>
        </div>
        <div className="col-sm mt-3">
          <label for="name">Cost </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
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