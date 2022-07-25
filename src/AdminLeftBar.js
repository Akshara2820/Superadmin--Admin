import React from 'react'
import {Link} from 'react-router-dom'
import { IoStopwatchOutline } from "react-icons/io5";

function AdminLeftBar() {
  return (
    <div className='w-60'>
   

          <span className='font-bold'>**Admin**</span>
          <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100 mt-4">
            <span className="text_icon">
              <IoStopwatchOutline className="font-medium leftSidebar-icon text-purple-900 " />
            </span>
            <Link to='/dashbord' > <span className="ml-3 font-medium text_icon_text text-purple-900">
            Dashboard </span> </Link>
        

          </div>

         

          <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100 mt-4">
            <span className="text_icon">
              <IoStopwatchOutline className="font-medium leftSidebar-icon text-purple-900 " />
            </span>
            <Link to ='/adminuserlist'> <span className="ml-3 font-medium text_icon_text text-purple-900">
              User List
            </span>
            </Link>
          </div>
  
    
    </div>
  )
}

export default AdminLeftBar