import { useState } from "react";
import "./expenses.css";
import ListExpenses from "./list-expense/list-expenses";
import CreateExpenses from "./create-expense/create-expenses";

function Expenses(){

    //primitve (string, number, boolean, null, undefined) & *by value
    // non primitives (arrays & objects) * by reference
    
    let data = [
        { date:'2025-01-23', name:'car Insurance', amount: 3500},
        { date:'2025-02-18', name:'Bike Insurance', amount: 500},
        { date:'2025-03-15', name:'Lic', amount: 53000},
        { date:'2025-05-09', name:'Fridge', amount: 34000},
        { date:'2024-11-28', name:'Washing machine', amount: 40000},
        { date:'2024-10-17', name:'TV', amount: 12000},
        { date:'2023-12-17', name:'Dishwasher', amount: 35000},
        { date:'2023-06-25', name:'Water Purifier', amount: 17000},
        { date:'2023-02-03', name:'Vaccum Cleaner', amount: 32000},
        { date:'2023-01-13', name:'Sofa', amount: 78000},
        { date:'2023-01-13', name:'Sofa1', amount: 78000},
        { date:'2023-01-13', name:'Sofa2', amount: 78000},
        { date:'2023-01-13', name:'Sofa3', amount: 78000},
    ]
    const [expenses, setExpenses] = useState(data);
    const addExpenseIntoList = (obj) => {
        setExpenses ( (preVal) => [ obj, ...preVal] ); 
        // in JSP you will write DB connection and insert into DB
        //you call an API which will insert values into DB
    } 
    return ( <div> 
        
        <h1> Expenses</h1>
        <CreateExpenses addExpense = {addExpenseIntoList}/>

        <ListExpenses list={expenses}/>
        {/* <div className="expenses">
        <div className="expense-list header">
                <div className="date">Date</div>
                <div className="name"> Name</div>
                <div className="amount">Amount</div>
            </div>

            {expenses.map((item)=>{
                return <div className="expense-list">
                <div className="date">{item.date}</div>
                <div className="name">{item.name}</div>
                <div className="amount">{item.amount}</div>
            </div>
            })}


            {/* <div className="expense-list">
                <div className="date">{data[0].date}</div>
                <div className="name">{data[0].name}</div>
                <div className="amount">{data[0].amount}</div>
            </div>
            <div className="expense-list">
                <div className="date">{data[1].date}</div>
                <div className="name">{data[1].name}</div>
                <div className="amount">{data[1].amount}</div>
            </div>
            <div className="expense-list">
                <div className="date">{data[2].date}</div>
                <div className="name">{data[2].name}</div>
                <div className="amount">{data[2].amount}</div>
            </div>
            <div className="expense-list">
                <div className="date">{data[3].date}</div>
                <div className="name">{data[3].name}</div>
                <div className="amount">{data[3].amount}</div>
            </div> 

        </div> */}
        
         </div>);

}

export default Expenses