import React, { useContext, useState } from 'react';

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
        }}
        >
            {children}
        </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };