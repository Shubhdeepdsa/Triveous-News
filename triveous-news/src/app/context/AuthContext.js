import { useContext, createContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setUser(['Shubhdeep']);
        }, 1000);
    }, []);
    return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>)
}


export const useUserAuth = () => {
    return useContext(AuthContext)
}