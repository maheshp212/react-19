import { useEffect, useState } from "react";
import "./apis.css";
import axios from "axios";
import domainHost from "../../config";

console.log(domainHost);
console.log(process.env.REACT_APP_API_BASE_URL);

function Apis() {

    // on page load -- [] param
    // if any useState variable changes -- variable name as parameter
  useEffect(()=>{
    getUsers();
  }, [])  
  
  
  const [users, setUsers] = useState([]) 
  const [userinfo, setUserInfo] = useState('') 
  const getUsers = () => {
    let url = "https://gorest.co.in/public/v2/users";
    let headers = {
        headers: {
            "Authorization" : "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
        }
    }
    fetch(url,headers)
      .then((data) => data.json())
      .then((resp) => {
       // console.log(resp);
       console.log('im insdie api response');
        setUsers(resp)
      });

      console.log('im last line fo getusers') 
  };

  const createUser = () =>{
    let url = "https://gorest.co.in/public/v2/users";
    let body = {
        name: 'rajani',
        email:'rajani4@gmail.com',
        gender: 'female',
        status: 'active'
    };

    let headers = {
        headers: {
            "Authorization" : "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
        }
    }
    axios.post(url, body, headers)
    .then(resp =>{
        console.log(resp);
        setUserInfo(JSON.stringify(resp));
        getUsers();
    })
  }
  const editUser = (id) =>{
    let url = "https://gorest.co.in/public/v2/users/"+id;
    let body = {
        name: 'rajani',
        email:'rajani51@gmail.com',
        gender: 'female',
        status: 'active'
    };

    let headers = {
        headers: {
            "Authorization" : "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
        }
    }
    axios.put(url, body, headers)
    .then(resp =>{
        console.log(resp);
        setUserInfo(JSON.stringify(resp));
        getUsers();
    })
  }

  const deleteUser = (id) =>{
    let url = "https://gorest.co.in/public/v2/users/"+id;
    
    let headers = {
        headers: {
            "Authorization" : "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
        }
    }
    axios.delete(url , headers)
    .then(resp =>{
        console.log(resp);
        setUserInfo(JSON.stringify(resp));
        getUsers();
    })
  }
  const viewUser = (id) =>{
    let url = "https://gorest.co.in/public/v2/users/"+id;
    
    let headers = {
        headers: {
            "Authorization" : "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
        }
    }
    axios.get(url , headers)
    .then(resp =>{
        console.log(resp);
        setUserInfo(JSON.stringify(resp));
    })
  }
  return <div> APIs

<div className="row-item header">
            <div className="row-name"> Name</div>
            <div className="row-gender"> Gender </div>
            <div className="row-email"> Email </div>
            <div className="row-actions"> Actions </div>
            </div>
    {users.map(user => {
        return <div className="row-item">
            <div className="row-name"> {user.name} </div>
            <div className="row-gender"> {user.gender} </div>
            <div className="row-email"> {user.email} </div>
            <div className="row-actions"> 
                <div onClick={() => editUser(user.id)}> Edit </div>
                <p onClick={() => deleteUser(user.id)}> delete </p>
                <span onClick={() => viewUser(user.id)}> view </span>
            </div>
            </div>
    })}

    <button onClick={createUser}> Create user</button>

    {userinfo}
  </div>;
}
export default Apis;
