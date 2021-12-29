import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom"
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons/lib';

import './Nav.css'

const Nav = () => {

    const [ sidebar, setSidebar ] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className="main-page">

        <IconContext.Provider value={{color: 'white'}}>

        <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

           <ul className='nav-menu-items' onClick={showSidebar}>
           <li className='navbar-toggle'>
               <Link to="#" className='menu-bars'>
                   <AiIcons.AiOutlineClose />
               </Link>
           </li>
                { SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName} >
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
                <button className='nav-button'>Logout</button>
            </ul>

        </nav>
        </IconContext.Provider>

        {/* <div className='task-card'>
            taskbar
        </div>

        <div className='project-card'>
            projectbar
        </div>

        <div className='stat-card'>
            stat card
        </div> */}


        </div>
    )
}

export default Nav

