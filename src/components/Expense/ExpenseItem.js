import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.title)

        
    // const expenseDate = new Date(2022,2,28).toLocaleDateString('tr');
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = '294.67';

    // let title = props.title;
    const clickHandler = () => {
      setTitle('Updated!');
      
      console.log(title);
    }
    
    return (
      <main>
      <Card className="expense-item">
          <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandler} >Change Title</button>
      </div>
      </Card>
      </main>
    );
  }

export default ExpenseItem;