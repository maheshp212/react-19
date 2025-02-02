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
import Memo from "../hooks/memo";
import Reducer from "../hooks/reducer";
import Ref from "../hooks/ref";
import Redux from "../redux/redux";

function Main(){
    return ( <main> 

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/:name/p/:idsdf" element={<Dynamicurl/>} />
            <Route path="/variabless" element={<Var/>} />
            <Route path="/expenses" element={<Expenses/>} />
            <Route path="/apis" element={<Apis/>} />
            <Route path="/context" element={<Context/>} />
            <Route path="/memo" element={<Memo/>} />
            <Route path="/reducer" element={<Reducer/>} />
            <Route path="/ref" element={<Ref/>} />
            <Route path="/redux" element={<Redux/>} />
            <Route path="*" element={<Notfound/>} />
            
            {/* 
            
            / (slash) is for home page or landing page or first page of the website
            *(star) is for  unknown url's and it should be the last one in the routes\
            : (colon) is used for dynamic urls
            
            
            */}
        </Routes>

    

        </main>);

}

export default Main