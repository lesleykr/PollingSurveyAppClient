import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Home', 
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'  
    },
    {
        title: 'Account', 
        path: '/',
        icon: <FaIcons.FaUserCircle />,
        cName: 'nav-text'  
    },
    {
        title: 'Polls', 
        path: '/userProfilePage/:name',
        icon: <FaIcons.FaPoll />,
        cName: 'nav-text'  
    },
    {
        title: 'Sign Out', 
        path: '/Logout',
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text'  
    },
]
