import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import "./Sidebar.css";

const Sidebar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    userList,
    setUserList,
    openModal,
    setCurrentSelection,
  } = useGlobalContext();
  const watchLaterClick = (movie) => {
    setCurrentSelection(movie);
    closeSidebar();
    openModal();
  };
  const removeItem = (item) => {
    setUserList(userList.filter((movie) => movie != item));
    window.localStorage.removeItem(item.id);
  };
  const clearList = () => {
    setUserList([]);
    window.localStorage.clear();
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
            const { name, original_title } = movie;
            return (
              <div className="watch-later-container">
                <h3
                  id={original_title}
                  onClick={() => watchLaterClick(movie)}
                  className="watch-later"
                >
                  {name || original_title}
                </h3>
                <button
                  className="delete-btn"
                  onClick={() => removeItem(movie)}
                >
                  <FaTimes />
                </button>
              </div>
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
