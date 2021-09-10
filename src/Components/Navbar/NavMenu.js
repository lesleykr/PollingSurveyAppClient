import React, { useState } from "react";
import "./NavMenu.css";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";




const NavMenu = (props) => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {  //similar to toggle
    setSidebar(!sidebar) 
  }

//Line 23 can access all icons at the top level and customize them

  return (
    <div>
    <IconContext.Provider value = {{ color: "#0AA7DB" }}>
  
      <div className ="navbar">
        <Link to = "#" className='menu-bars'>
          <FaIcons.FaBars onClick ={showSidebar} />
        </Link>
      </div>
      <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className = "nav-menu-items" onClick ={showSidebar}>
          <li className = "navbar-toggle">
            <Link to = "#" className = "menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
            </li> 
            {SidebarData.map((item, index) => {
              return (
                <li key = {index} className = {item.cName}>
                  <Link to = {item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  </li>
              )
            })}
        </ul>
      </nav>
      </IconContext.Provider>
    </div>
  );
};
export default NavMenu;
