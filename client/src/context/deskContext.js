import React, { createContext, useState } from 'react';

export const DeskContext = createContext();

export function DeskProvider({ children }) {

    const [deskData, setDeskData] = useState([])


    return (
        <DeskContext.Provider value={{ deskData, setDeskData }}>
            {children}
        </DeskContext.Provider>
    );
}
