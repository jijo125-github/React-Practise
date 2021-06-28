import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import "./Expenses.css"

const Expenses = (props) => {
    const [yearSelected, setYearSelected] = useState('2021');
    const expenseFilterYearHandler = (filteredYear) => {
        setYearSelected(filteredYear);
    };
    // using filter method to filter out particular year expenses
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === yearSelected);


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={yearSelected} onSelectedYearSave={expenseFilterYearHandler} />
                {/* using map to dynamically insert each expenseItem */}
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;