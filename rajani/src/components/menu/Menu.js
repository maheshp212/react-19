import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(){
    return ( <nav>
        {/* <div> <Link to="/home"> Home</Link></div>
        <div> <Link to="/intro"> Intro</Link></div>
        <div> <Link to="/variabless"> Var</Link></div>
        <div> <Link to="/expenses"> Expenses</Link></div>
        <div> <Link to="/apis"> APIs</Link></div>
        <div> <Link to="/context"> context</Link></div>
        */}

        <div> <NavLink activeClassName="rajani" to="/"> Home</NavLink></div>
        <div> <NavLink activeClassName="active" to="/intro"> Intro</NavLink></div>
        <div> <NavLink activeClassName="active" to="/variabless"> Var</NavLink></div>
        <div> <NavLink activeClassName="active" to="/expenses"> Expenses</NavLink></div>
        <div> <NavLink activeClassName="active" to="/apis"> APIs</NavLink></div>
        <div> <NavLink activeClassName="active" to="/context"> context</NavLink></div>
        <div> <NavLink activeClassName="active" to="/oppo/p/123"> oppo</NavLink></div>
        <div> <NavLink activeClassName="active" to="/pixel/p/345"> pixel</NavLink></div>
        <div> <NavLink activeClassName="active" to="/redmi/p/r4r5y  "> redmi</NavLink></div>
        <div> <NavLink activeClassName="active" to="/rajani"> Rajani</NavLink></div>
        <div> <NavLink activeClassName="active" to="/memo"> Memo</NavLink></div>
        <div> <NavLink activeClassName="active" to="/reducer"> Reducer</NavLink></div>
        <div> <NavLink activeClassName="active" to="/ref"> Ref</NavLink></div>
        <div> <NavLink activeClassName="active" to="/redux"> Redux</NavLink></div>
    </nav>);

}

export default Menu

