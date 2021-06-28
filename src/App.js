import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [{
  'id': 'e1',
  'title': 'Car Insurance',
  'price': 4000,
  'date': new Date(2021, 6, 18)
},
{
  'id': 'e2',
  'title': 'Health Insurance',
  'price': 10000,
  'date': new Date(2020, 6, 22)
},
{
  'id': 'e3',
  'title': 'Light Bill',
  'price': 3300,
  'date': new Date(2019, 2, 17)
}];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  //addExpenseHandler is a function which will be used to fetch data from the child (NewExpense.js) and use in parent (App.js) component
  const addExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* Here we are just using a function (onAddNewExpense) in props as a pointer which can be used in Child Component (NewExpense) */}
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
