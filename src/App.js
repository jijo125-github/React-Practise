import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [{
    'title': 'Car Insurance',
    'price': 4000,
    'date': new Date(2021, 6, 18)
  }, {
    'title': 'Health Insurance',
    'price': 10000,
    'date': new Date(2021, 6, 22)
  }];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>A para</p>
      <div>
        <h1>heading</h1>
        <h2>second heading</h2>
      </div>
      <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
