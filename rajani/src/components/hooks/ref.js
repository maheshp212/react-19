import { useRef } from "react";

const Ref = () =>{

    const inputRef = useRef(); // to change the attributes of html dynamically

    const handleClick = () => {
        inputRef.current.focus();
    }
    return <> 
    
        <input type = "text" ref={inputRef}/>


<br/> <br/>
        <button onClick={handleClick}> click me for focus</button>
    </>
}

export default Ref;