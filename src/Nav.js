import React, { useEffect, useState } from "react";
import "./Nav.css";
import Logo from "./movie-logo.png";
import Menu from "./menu-icon.jpg";
import { useGlobalContext } from "./context";

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

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className={show ? "nav-black" : "nav"}>
      <h1 className="nav-title" onClick={refresh}>
        BestFlix
      </h1>
      {/* <img className="nav-logo" src={Logo} alt="Movie App Logo" /> */}
      {/* <img
        onClick={isSidebarOpen ? closeSidebar : openSidebar}
        className={isSidebarOpen ? "nav-menu nav-open" : "nav-menu"}
        src={Logo}
        alt="Menu Icon"
      /> */}
      <button
        onClick={isSidebarOpen ? closeSidebar : openSidebar}
        className={isSidebarOpen ? "nav-menu nav-open" : "nav-menu"}
      >
        Watch Later
      </button>
    </div>
  );
}

export default Nav;
