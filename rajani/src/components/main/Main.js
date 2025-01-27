import Home from "../home/Home";
import Intro from "../intro/Intro";
import Var from "../var/Var";
import Expenses from "../expenses/expenses";
import "./Main.css";
import {Route, Routes} from "react-router-dom";
import Apis from "../apis/apis";
import Context from "../context/context";

function Main(){
    return ( <main> 

        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/variabless" element={<Var/>} />
            <Route path="/expenses" element={<Expenses/>} />
            <Route path="/apis" element={<Apis/>} />
            <Route path="/context" element={<Context/>} />
        </Routes>

    

        </main>);

}

export default Main