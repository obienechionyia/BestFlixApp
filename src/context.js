import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSelection, setCurrentSelection] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider value={{ 
            isModalOpen,
            openModal,
            closeModal,
            currentSelection,
            setCurrentSelection
        }}
        >
            {children}
        </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };