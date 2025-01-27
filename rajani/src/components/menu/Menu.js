import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(){
    return ( <nav>
        
        <div> <Link to="/home"> Home</Link></div>
        <div> <Link to="/intro"> Intro</Link></div>
        <div> <Link to="/variabless"> Var</Link></div>
        <div> <Link to="/expenses"> Expenses</Link></div>
        <div> <Link to="/apis"> APIs</Link></div>
        <div> <Link to="/context"> context</Link></div>
    </nav>);

}

export default Menu

