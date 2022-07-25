import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { IoStopwatchOutline } from "react-icons/io5";
import { FaRaspberryPi } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsSliders, BsSearch } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { useContext } from "react";
import { Context } from "./Context.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Context.js";
import UserDetails from "./UserDetails.js";
import UserList from "./UserList.js";

function Layout() {
  const { auth , roll} = useAuth();
  const [userroll, setRoll] = useState(auth);
  const navigate = useNavigate();
  function logout() {
    navigate("/login");
  }

  return (
    <>
      <>
        {/**********************************Left bar*******************************************/}
        <div className="flex">
          <div className="w-60 h-screen  bg-gray-50 flex flex-col">
            <div className=" font-medium">
              <div className="SideBar w-60" aria-label="Sidebar">
                <div className="overflow-y-auto px-3 rounded ">
                  <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100 mt-4">
                  <Link to="/userdetails">
                  hyh
                  </Link>
                  
                    <span className="text_icon">
                      <IoStopwatchOutline className="font-medium leftSidebar-icon text-purple-900 " />
                    </span>
                    <Link to="/dashbord">
                      {" "}
                      <span className="ml-3 font-medium text_icon_text text-purple-900">
                        Dashboard{" "}
                      </span>{" "}
                    </Link>
                  </div>

                  <ul className="pt-4 mt-4  -ml-8 space-y-2 border-t border-gray-200"></ul>
                </div>
              </div>
            </div>

            {roll === "Admin"
              ? 
                  <>
                    <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100 mt-4">
                      <span className="text_icon">
                        <IoStopwatchOutline className="font-medium leftSidebar-icon text-purple-900 " />
                      </span>
                      <Link to="/userlist">
                        {" "}
                        <span className="ml-3 font-medium text_icon_text text-purple-900">
                          User List
                        </span>
                      </Link>
                    </div>
                  </>
                
              : 
                  <>
                    <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100 mt-4">
                      <span className="text_icon">
                        <IoStopwatchOutline className="font-medium leftSidebar-icon text-purple-900 " />
                      </span>
                      <Link to="/userdetails">
                        {" "}
                        <span className="ml-3 font-medium text_icon_text text-purple-900">
                          User Details
                        </span>
                      </Link>
                    </div>

                    <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100 mt-4">
                      <span className="text_icon">
                        <IoStopwatchOutline className="font-medium leftSidebar-icon text-purple-900 " />
                      </span>
                      <Link to="/userlist">
                        {" "}
                        <span className="ml-3 font-medium text_icon_text text-purple-900">
                          User List
                        </span>
                      </Link>
                    </div>
                  </>
                }
          </div>

          <div className="flex flex-col flex-1 bg-white-100">
            <div className="h-28 bg-gray-100 w-full">
              {/* ************************************************* header ***************************************************/}
              <div className="top_header px-4 py-4  ">
                <div className="first_section ">
                  <div className="flex justify-between logo_section">
                    <div className="flex ">
                      <FaRaspberryPi className="icon_logo" />
                      <span class=" self-center text-xl font-bold whitespace-nowrap ">
                        BERRY
                      </span>
                    </div>
                    <div className="">
                      {" "}
                      <BiMenu className="icon_slider mr-4 bg-purple-200 rounded-lg hover:bg-purple-500" />{" "}
                    </div>
                  </div>

                  <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <div className="">
                        <BsSearch className=" " />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full pl-10 p-2.5  "
                      placeholder="Search..."
                      required
                    />
                    <button
                      type="button"
                      class="flex absolute inset-y-0 right-0 items-center pr-3 "
                    >
                      <div className="mt-1">
                        <BsSliders className="hover:bg-purple-500 bg-purple-200 rounded-xl icon_slider" />
                      </div>
                    </button>
                  </div>
                </div>

                <button onClick={logout}>
                  {" "}
                  <IoMdLogOut className="icon bg-purple-600 rounded-lg hover:bg-purple-800 ml-4 " />
                </button>

                <div className="last_section">
                  <div className="notification-icon mx-4  flex"></div>

                  <div className="notification-icon mx-4 ">
                    <IoIosNotificationsOutline className="icon bg-purple-200 rounded-lg hover:bg-purple-600" />
                  </div>
                  <button
                    type="button"
                    class="flex justify-between items-center border border-gray-400 rounded-full "
                  >
                    <img
                      class="w-10 h-10 rounded-full mx-2 my-1"
                      src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                      alt="Rounded avatar"
                    />
                    <div className="setting-icon mr-2 ">
                      <AiOutlineSetting className="setting_icon" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-red-50">
              <Outlet />
              {roll === "Admin" ? "Welcome! Admin" : "Welcome! Superadmin" }
           
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Layout;
