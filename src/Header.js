
import React from 'react'
import { FaRaspberryPi } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsSliders, BsSearch } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import {IoMdLogOut} from "react-icons/io"

import { RiAdminLine } from 'react-icons/ri'

import { GrUserAdmin } from 'react-icons/gr'
// import Logout from '../login-signup/logout'
function Header() {
    const navigate = useNavigate()

    const item = localStorage.getItem("userRegister");
    const parsedItem = JSON.parse(item);
    console.log(parsedItem, "login data ");
 
    function admin() {
        navigate('/admin')
    }
    function superAdmin() {
        navigate('/superadmin')
    }
    function logout(){
        navigate('/')
    }
    return (
        <div className='top_header px-4 py-4  '>
            <div className='first_section '>
                <div className="flex justify-between logo_section">
                    <div className='flex '>
                        <FaRaspberryPi className="icon_logo" />
                        <span class=" self-center text-xl font-bold whitespace-nowrap ">BERRY</span>
                    </div>
                    <div className=''> <BiMenu className='icon_slider mr-4 bg-purple-200 rounded-lg hover:bg-purple-500' /> </div>
                </div>


                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <div className=''>
                            <BsSearch className=' ' />
                        </div>
                    </div>
                    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full pl-10 p-2.5  " placeholder="Search..." required />
                    <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3 ">
                        <div className='mt-1'>
                            <BsSliders className='hover:bg-purple-500 bg-purple-200 rounded-xl icon_slider' />
                        </div>
                    </button>
                </div>
            </div>
            <div className='last_section'>
            <div className='notification-icon mx-4  flex'>
                    <button onClick={superAdmin}><RiAdminLine className='icon bg-purple-200 rounded-lg hover:bg-purple-600 mx-4 ' /></button>
                    <button onClick={admin}><GrUserAdmin className='icon bg-purple-200 rounded-lg hover:bg-purple-600 ' /></button>
                    <button onClick={logout}> <IoMdLogOut className='icon bg-purple-200 rounded-lg hover:bg-purple-600 ml-4 ' /></button>
                </div>
               
            

                <div className='notification-icon mx-4 '><IoIosNotificationsOutline className='icon bg-purple-200 rounded-lg hover:bg-purple-600' /></div>
                <button type='button' class="flex justify-between items-center border border-gray-400 rounded-full ">
                    <img class="w-10 h-10 rounded-full mx-2 my-1" src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="Rounded avatar" />
                    <div className='setting-icon mr-2 '><AiOutlineSetting className='setting_icon' /></div>
                </button>
            </div>


        </div>
    )

}

export default Header