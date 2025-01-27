import { useContext } from "react";
import Salary from "./salary";
import { empContext } from "./context";

const Employee = () => {

    let context = useContext(empContext);
    return <> {/*
         empty tags are called as fragment, 
    multi line commenting in the react html code
     */} 


    <div> this is empoloyee component </div>
    <div> <br/><br/>
        ID1 : {context[0].id} {context[0].name}  <br/><br/>
        ID2 : {context[1].id} {context[1].name}  <br/><br/>
    </div>
    <Salary/>
    </>
}
export default Employee;