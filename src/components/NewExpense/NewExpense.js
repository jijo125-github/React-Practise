import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    // saveExpenseDataHandler is a function which will be used to fetch data from the child and use in parent component
    // Here, ExpenseForm is child and NewExpense is parent. Will collect the ExpenseForm data by handling the logic in parent.
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/> 
        </div>
    );
};

export default NewExpense;