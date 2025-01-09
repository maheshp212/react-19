import "./Var.css";

function Var(){

    // String
    // Number
    // array 
    // object 
    // Boolean
    // null
    // undefined
    // function

    let fname = ' react js';
    let age = 34;
    let fruits = ['kiwi','melon', 'berry'];
    let user = {
        name: 'javascript',
        exp: 6
    };
    let gender = true;
    let interest = null;
    let undf;

    let a = 2;
    let b =3;
    return ( <div> this is Var component content
        <br/><br/>
            {fname} <br/><br/> 
            {age} <br/><br/>
            {fruits} <br/><br/>
            length :: {fruits.length} <br/><br/>
            {fruits[1]} <br/><br/>
            {fruits[2]} <br/><br/>
            **{gender} <br/><br/>
            **{interest} <br/><br/>
            **{undf} <br/><br/>
            {user.name}<br/><br/>
            {user.exp}<br/><br/>



            {a}<br/><br/>
            {b}<br/><br/>

            a+b :: {a+b}<br/>
            a-b :: {a-b}<br/>
            a*b :: {a*b}<br/>
            a/b :: {a/b}<br/>
            a%b :: {a%b}<br/>

            <br/><br/>
            
            2+3 :: {2+3}<br/>
            2-3 :: {2-3}<br/>
            2*3 :: {2*3}<br/>
            2/3 :: {2/3}<br/>
            2%3 :: {2%3}<br/>


            <br/><br/><br/><br/><br/><br/><br/><br/>

            How to use variables in React View 
            - data binding
            - expressions
            - with all datatypes
        </div>);

}

export default Var