import React, { useEffect, useState } from 'react' 
import {Link} from 'react-router-dom'



function SignUp () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [roll, setRoll] = useState('')

    function SignUp_Details(){
        const obj = {
            name,
            email,
            password,
            roll
        }
        let arr1=[]
    
        if (localStorage.getItem('userRegister')){
            arr1=[...JSON.parse(localStorage.getItem('userRegister'))]
        }
        arr1=[...arr1,obj]
    
        console.log(arr1);
    
        localStorage.setItem('userRegister',JSON.stringify(arr1))
    
        return arr1
    }
    
    return (
      <div className='login-formet'>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Roll </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Superadmin / Admin"
            name='name'
            onChange={(e) =>setRoll(e.target.value)}
           
 
          />
        </div>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name='name'
            onChange={(e) =>setName(e.target.value)}
           
 
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name='email'
            onChange={(e) =>setEmail(e.target.value)}
        
           
            
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password'
            onChange={(e) =>setPassword(e.target.value)}
            
          />
        </div>
        <Link to='/login'> Login</Link>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={SignUp_Details}>
            Sign Up
          </button>
        </div>
        
      </div>
    )
  }
export default SignUp;