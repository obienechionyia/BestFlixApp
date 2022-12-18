import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import "./Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, userList, setUserList } =
    useGlobalContext();
  const removeItem = (item) => {
    setUserList(userList.filter((movie) => movie != item));
  };
  const clearList = () => {
    setUserList([]);
  };
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-container">
        <h1 className="sidebar-text">Your Watch List</h1>
        <div className="movie-list">
          {userList.map((movie) => {
            return (
              <h3 id={movie} className="watch-later">
                {movie}
                <button
                  className="delete-btn"
                  onClick={() => removeItem(movie)}
                >
                  <FaTimes />
                </button>
              </h3>
            );
          })}
          <button className="clear-btn" onClick={clearList}>
            {userList.length > 0 ? "Clear List" : "List Empty"}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
