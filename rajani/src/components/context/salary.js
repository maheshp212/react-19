import { useContext } from "react";
import { empContext } from "./context";

 const Salary = ( ) => {
    let context = useContext(empContext);

    return <div> this is salary component

        <br></br>
        ID1 : {context[0].id} {context[0].name}  - {context[0].salary}  <br/><br/>
        ID2 : {context[1].id} {context[1].name}  - {context[1].salary} <br/><br/>
    </div>
 }
 export default Salary;