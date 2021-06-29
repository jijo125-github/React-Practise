import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from "./ExpensesChart";
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
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;