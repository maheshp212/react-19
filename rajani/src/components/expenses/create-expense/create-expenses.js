import { useState } from "react";
import "./create-expenses.css";

function CreateExpenses(props){

    //primitve (string, number, boolean, null, undefined) & *by value
    // non primitives (arrays & objects) * by reference
    
   
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    

    const nameChangeHandler= (e) => {
        setName(e.target.value);
    }

    const dateChangeHandler= (e) => {
        setDate(e.target.value);
    }
    
    const amountChangeHandler= (e) => {
        setAmount(e.target.value);
    }
    const createExpense = () =>{
        let obj = {
            name : name,
            date: date,
            amount: amount
        }
        props.addExpense(obj);
        resetExpense();
    }
    const resetExpense = () =>{
        setName('');
        setDate('');
        setAmount('')
    }
    
    return ( <div> 
        
        <div className="create-expense">
            <div className="create-expense-heading">Create</div>
            <div className="create-expense-form">
                <div className="create-expense-form-item">
                    <div className="create-expense-form-label">Name</div>
                    <div><input type="text" value={name} onChange={nameChangeHandler}   />  </div>
                </div>
                <div className="create-expense-form-item">
                    <div className="create-expense-form-label">Amount</div>
                    <div><input type="number" value={amount} onChange={amountChangeHandler} /></div>
                </div>

                <div className="create-expense-form-item">
                    <div className="create-expense-form-label">Date</div>
                    <div><input type="date" value={date} onChange={dateChangeHandler} /></div>
                </div>
                <div className="create-expense-form-actions">
                    <div><button onClick={createExpense}> Create </button></div>
                    <div><button onClick={resetExpense}> Reset </button></div>
                </div>

            </div>
        </div>
         </div>);

}

export default CreateExpenses;