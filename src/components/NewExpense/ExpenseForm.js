import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = event => setEnteredTitle(event.target.value);
    const amountChangeHandler = event => setEnteredAmount(event.target.value);
    const dateChangeHandler = event => setEnteredDate(event.target.value);

    // logic when a form is submitted
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: Number(enteredAmount),
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData); // child to parent component communication
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        // handling form on submit below
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2021-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;