import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    {id:'e1',title:'Car Insurance',amount:296.56,date:new Date(2022,2,28)},
    {id:'e2',title:'Toilet Paper',amount:30.40,date:new Date(2022,2,15)},
    {id:'e3',title:'New Tv',amount:1300,date:new Date(2022,1,3)},
    {id:'e4',title:'Gas',amount:101.38,date:new Date(2022,2,10)}, 
];

  return (
    <div className="App">
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
