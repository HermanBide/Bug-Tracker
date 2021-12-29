import React from 'react'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as GoIcons from "react-icons/go";


// function sidebarData() {
//     return (
//         <div>
            
//         </div>
//     )
// }

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <CgIcons.CgScreenWide />,
        cName: 'nav-text'
    },

    {
        title: 'Reports',
        path: '/Reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },

    {
        title: 'Task',
        path: '/Task',
        icon: <GoIcons.GoTasklist />,
        cName: 'nav-text'
    },

    {
        title: 'Project',
        path: '/Project',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    },

    {
        title: 'Administration',
        path: '/Administration',
        icon: <AiIcons.AiOutlineUsergroupAdd />,
        cName: 'nav-text'
    },
   

]
