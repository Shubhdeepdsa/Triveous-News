import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const NEWS_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d93d0cabc0ec4151a5493b25916fbc00';

export const AuthContextProvider = ({ children }) => {
    const [news, setNews] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await axios.get(NEWS_URL);
                setNews(response.data.articles);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchNewsData();
    }, []);

    const selectArticle = (article) => {
        setSelectedArticle(article);
    };

    const closeArticle = () => {
        setSelectedArticle(null);
    };

    return (
        <AuthContext.Provider value={{ news, selectArticle, closeArticle }}>{children}</AuthContext.Provider>
    );
};

export const useUserAuth = () => {
    return useContext(AuthContext);
};
