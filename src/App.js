import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [{
    'title': 'Car Insurance',
    'price': 4000,
    'date': new Date(2021, 6, 18)
  },
  {
    'title': 'Health Insurance',
    'price': 10000,
    'date': new Date(2021, 6, 22)
  },
  {
    'title': 'Light Bill',
    'price': 3300,
    'date': new Date(2021, 2, 17)
  }];

  //addExpenseHandler is a function which will be used to fetch data from the child (NewExpense.js) and use in parent (App.js) component
  const addExpenseHandler = (newExpenseData) => {
    console.log('In App.js');
    console.log(newExpenseData);
  };

  return (
    <div>
      {/* Here we are just using a function (onAddNewExpense) in props as a pointer which can be used in Child Component (NewExpense) */}
      <NewExpense onAddNewExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
