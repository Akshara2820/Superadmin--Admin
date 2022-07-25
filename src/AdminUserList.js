import React from 'react'
import Header from './Header'
import AdminLeftBar from './AdminLeftBar'

function AdminUserList() {
    const saved = localStorage.getItem("userRegister")
  
    const initialItem = JSON.parse(saved)
  return (
    
    <div>
    <h1 className='underline'>User List </h1>
        {initialItem.map((saved) =>
            <div >
            <p> {saved.name}</p>
            </div>
        )}
        
        </div> 
    
  
  )
}

export default AdminUserList