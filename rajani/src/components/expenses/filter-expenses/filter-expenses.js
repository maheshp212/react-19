
function FilterExpenses ( props){

    const filterHandler = (e) =>{
        props.filterYear(e.target.value);
    }
    
    return <div>
            <label> Filter by Year</label>
            <select onChange={filterHandler}>
                <option value="all">All</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
            </select>
         </div>
}

export default FilterExpenses;
