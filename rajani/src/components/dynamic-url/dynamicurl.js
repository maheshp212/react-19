import { useParams } from "react-router-dom";

const Dynamicurl = () =>{

    const {name, id} = useParams();
    return <div> this is dynamic url component -- {name} -- {id}</div>
}

export default Dynamicurl;