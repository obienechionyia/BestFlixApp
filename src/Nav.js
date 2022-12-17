import React, { useEffect, useState } from 'react';
import './Nav.css';
import Logo from './movie-logo.png';
import Menu from "./menu-icon.jpg";
import { useGlobalContext } from './context';

function Nav() {
    const { openSidebar, closeSidebar, isSidebarOpen } = useGlobalContext();
   const [show, setShow] = useState(false);
  
   useEffect(() => {
       window.addEventListener("scroll", () => {
           if (window.scrollY > 100) {
               setShow(true);
           } else {
               setShow(false);
           }
       });
   }, []);


  return (
    <div className={show ? "nav-black" : "nav"}>
        <img
            className="nav-logo"
            src={ Logo }
            alt="Movie App Logo"
        />
        <img onClick={isSidebarOpen ? closeSidebar : openSidebar}
            className="nav-menu"
            src={ Menu }
            alt="Menu Icon"
        />
    </div>
  )
}

export default Nav