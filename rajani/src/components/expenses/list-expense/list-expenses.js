import "./list-expenses.css";

function ListExpenses({list}){
    
    return ( <div> 
        
        <h1> Expenses from list expense</h1>
        
        <div className="expenses">
        <div className="expense-list header">
                <div className="date">Date</div>
                <div className="name"> Name</div>
                <div className="amount">Amount</div>
            </div>

            {list.map((item)=>{
                return <div className="expense-list">
                <div className="date">{item.date}</div>
                <div className="name">{item.name}</div>
                <div className="amount">{item.amount}</div>
            </div>
            })}


            

        </div>
        
         </div>);

}

export default ListExpenses