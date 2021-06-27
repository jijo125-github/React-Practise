import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import "./Expenses.css"

const Expenses = (props) => {
    const item1 = props.expenses[0];
    const item2 = props.expenses[1];
    const item3 = props.expenses[2];
    const [yearSelected, setYearSelected] = useState('2021');

    const expenseFilterYearHandler = (filteredYear) => {
        setYearSelected(filteredYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={yearSelected} onSelectedYearSave={expenseFilterYearHandler} />
                <ExpenseItem title={item1.title} price={item1.price} date={item1.date} />
                <ExpenseItem title={item2.title} price={item2.price} date={item2.date} />
                <ExpenseItem title={item3.title} price={item3.price} date={item3.date} />
            </Card>
        </div>
    );
}

export default Expenses;