import React from "react";

import { IoStopwatchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function LeftBar() {


  return (
    <div className=" font-medium">
      <div className="SideBar w-60" aria-label="Sidebar">
        <div className="overflow-y-auto px-3 rounded ">
          <span>**SuperAdmin**</span>
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
            <Link to= '/userdetails' > <span className="ml-3 font-medium text_icon_text text-purple-900">
              User Details
            </span>
            </Link>
          </div>

          <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100 mt-4">
            <span className="text_icon">
              <IoStopwatchOutline className="font-medium leftSidebar-icon text-purple-900 " />
            </span>
            <Link to = '/userlist'> <span className="ml-3 font-medium text_icon_text text-purple-900">
              User List
            </span>
            </Link>
          </div>
          <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100 mt-4">
            <span className="text_icon">
              <IoStopwatchOutline className="font-medium leftSidebar-icon text-purple-900 " />
            </span>
            <span className="ml-3 font-medium text_icon_text text-purple-900">
              Password Manage
            </span>
          </div>

          <ul className="pt-4 mt-4  -ml-8 space-y-2 border-t border-gray-200">



          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
