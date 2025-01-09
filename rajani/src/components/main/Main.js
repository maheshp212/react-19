import Home from "../home/Home";
import Intro from "../intro/Intro";
import Var from "../var/Var";
import Expenses from "../expenses/expenses";
import "./Main.css";
import {Route, Routes} from "react-router-dom";

function Main(){
    return ( <main> 

        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/variabless" element={<Var/>} />
            <Route path="/expenses" element={<Expenses/>} />
        </Routes>

    

        </main>);

}

export default Main