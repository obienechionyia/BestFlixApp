import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";
import { useGlobalContext } from "./context";

const Modal = () => {
  const openTrailer = (selection) => {
    window.open(
      `https://www.youtube.com/results?search_query=${selection}+trailer`,
      "_blank"
    );
  };
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const { isModalOpen, closeModal, currentSelection, setUserList, userList } =
    useGlobalContext();
  const addToList = () => {
    if (!userList.includes(currentSelection)) {
      setUserList([...userList, currentSelection]);
    }
    window.localStorage.setItem(
      `${currentSelection.id}`,
      JSON.stringify(currentSelection)
    );
  };
  const removeItem = (item) => {
    setUserList(userList.filter((movie) => movie !== item));
    window.localStorage.removeItem(`${currentSelection.id}`);
  };

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h2 className="modal-text modal-title">
          {currentSelection?.name || currentSelection.original_title}
        </h2>
        <p className="modal-text">{currentSelection.overview}</p>
        <img
          className="modal-poster"
          src={`${baseUrl}${currentSelection.poster_path}`}
          alt={currentSelection?.name || currentSelection.original_title}
        />
        <button
          className="trailer-btn"
          onClick={() =>
            openTrailer(
              currentSelection?.name || currentSelection.original_title
            )
          }
        >
          Watch Trailer
        </button>
        <button
          className="trailer-btn watch-later-btn"
          onClick={
            !userList.includes(currentSelection)
              ? addToList
              : () => removeItem(currentSelection)
          }
        >
          {userList.includes(currentSelection)
            ? "Watch Later ✅"
            : "Watch Later"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
