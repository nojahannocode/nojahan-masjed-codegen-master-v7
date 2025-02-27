import React, { createContext, useContext, useState } from "react";

// Define the shape of global state
interface GlobalState {
    [key: string]: any;
}

// Define the context type
interface GlobalContextType {
    globalData: GlobalState;
    setGlobalData: React.Dispatch<React.SetStateAction<GlobalState>>;
}

// Create Context with default empty state
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Global Provider Component
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [globalData, setGlobalData] = useState<GlobalState>({});

    return (
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom Hook for Easy Access
export const useGlobalStore = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalStore must be used within a GlobalProvider");
    }
    return context;
};
