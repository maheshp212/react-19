import { useState } from "react";
import "./expenses.css";

function Expenses(){

    const [name, setName] = useState('');
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
    return ( <div> 
        
        <h1> Expenses</h1>
        <div className="create-expense">
            <div className="create-expense-heading">Create</div>
            <div className="create-expense-form">
                <div className="create-expense-form-item">
                    <div className="create-expense-form-label">Name</div>
                    <div><input type="text" /></div>
                </div>
                <div className="create-expense-form-item">
                    <div className="create-expense-form-label">Amount</div>
                    <div><input type="number" /></div>
                </div>

                <div className="create-expense-form-item">
                    <div className="create-expense-form-label">Date</div>
                    <div><input type="date" /></div>
                </div>
                <div className="create-expense-form-actions">
                    <div><button> Create </button></div>
                    <div><button> Reset </button></div>
                </div>

            </div>
        </div>
        <div className="expenses">
        <div className="expense-list header">
                <div className="date">Date</div>
                <div className="name"> Name</div>
                <div className="amount">Amount</div>
            </div>

            {data.map((item)=>{
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
            </div> */}

        </div>
        
         </div>);

}

export default Expenses