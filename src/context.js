import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSelection, setCurrentSelection] = useState([]);
    const [userList, setUserList] = useState([]);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const localList = [];

    // const setFromLocal = () => {
    //     for (let i = 0; i < localStorage.length; i++) {
    //         const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
    //         if (!localList.includes(item)) {
    //             localList.push(item);
    //         };
    //     };
    //     console.log(localList);
    //     setUserList(localList);
    // };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return <AppContext.Provider value={{ 
            isModalOpen,
            openModal,
            closeModal,
            currentSelection,
            setCurrentSelection,
            userList,
            setUserList,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            // setFromLocal,
        }}
        >
            {children}
        </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };