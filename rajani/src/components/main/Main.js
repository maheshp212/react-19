import Home from "../home/Home";
import Intro from "../intro/Intro";
import Var from "../var/Var";
import Expenses from "../expenses/expenses";
import "./Main.css";
import {Route, Routes} from "react-router-dom";
import Apis from "../apis/apis";
import Context from "../context/context";
import Notfound from "../notfound/notfound";
import Dynamicurl from "../dynamic-url/dynamicurl";

function Main(){
    return ( <main> 

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/:name/p/:id" element={<Dynamicurl/>} />
            <Route path="/variabless" element={<Var/>} />
            <Route path="/expenses" element={<Expenses/>} />
            <Route path="/apis" element={<Apis/>} />
            <Route path="/context" element={<Context/>} />
            <Route path="*" element={<Notfound/>} />
            
            {/* 
            
            / (slash) is for home page or landing page or first page of the website
            *(star) is for  unknown url's and it should be the last one in the routes\
            
            
            */}
        </Routes>

    

        </main>);

}

export default Main