import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import "./Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, userList } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-container">
        <h1 className="sidebar-text">Your Movie List</h1>
        <div className="movie-list">
          {userList.map((movie) => {
            return (
              <h3 id={movie} className="watch-later">
                {movie}
              </h3>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
