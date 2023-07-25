import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [userData, setUserData] = useState({
        _id: null,
        image: '',
        fullName: '',
        email: '',
        password: '',
        department: '',
        role: '',
        phoneNumber: '',
    })

    // function login(userData) {
    //     setUserData({
    //         ...userData, userData: { ...userData }
    //     })
    // }

    function login(userData) {
        setUserData({
            ...userData,
            token: userData.token, // Set the 'token' property
        });
    }

    function logout() {
        setUserData({
            _id: null,
            image: '',
            fullName: '',
            email: '',
            password: '',
            department: '',
            role: '',
            phoneNumber: ''
        })
    }

    return (
        <UserContext.Provider value={{ userData, setUserData, logout, login }}>
            {children}
        </UserContext.Provider>
    );
}
