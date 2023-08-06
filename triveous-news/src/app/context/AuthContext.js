import { useContext, createContext, useState, useEffect } from "react"
import axios from 'axios'
const AuthContext = createContext()
const NEWS_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d93d0cabc0ec4151a5493b25916fbc00'
export const AuthContextProvider = ({ children }) => {
    const [news, setNews] = useState(null);
    useEffect(() => {
        const fetchNewsData = async () => {
            try { 
                const response = await axios.get(NEWS_URL)
                setNews(response.data.articles)
                console.log(response)
            } catch(error)  {
                console.error(error.message)
            }
        }
        fetchNewsData()
    }, [])
    return (<AuthContext.Provider value={{news}}>{children}</AuthContext.Provider>)
}
export const useUserAuth = () => {
    return useContext(AuthContext)
}