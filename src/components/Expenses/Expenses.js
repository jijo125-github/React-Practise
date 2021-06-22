import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"

const Expenses = (props) => {
    const item1 = props.expenses[0];
    const item2 = props.expenses[1];
    const item3 = props.expenses[2];

    return (
        <Card className="expenses">
            <ExpenseItem title={item1.title} price={item1.price} date={item1.date} />
            <ExpenseItem title={item2.title} price={item2.price} date={item2.date} />
            <ExpenseItem title={item3.title} price={item3.price} date={item3.date} />
        </Card>
    );
}

export default Expenses;