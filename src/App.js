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

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
