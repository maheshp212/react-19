import { useParams } from "react-router-dom";

const Dynamicurl = () =>{

    const {name, idsdf} = useParams();
    return <div> this is dynamic url component -- {name} -- {idsdf}</div>
}

export default Dynamicurl;