import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import {useAuth} from './Context.js'


function Login() {
  const {RollLogin} = useAuth()
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
;
  const saved = localStorage.getItem("userRegister");
  

 

  // console.log(saved,"details.......")

  function Check_Details() {
    RollLogin(roll,name)

  }


  return (
    <>
      <div className="login-formet">
        <h3 className="">Login</h3>
        <div className="mb-3 mt-10">
          <label>Enter Roll</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Roll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>UserName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter User Name"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/signup"> user register here</Link>
        <div className="d-grid">
          <button onClick={Check_Details}  className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
     
    </>
  );
}
export default Login;
