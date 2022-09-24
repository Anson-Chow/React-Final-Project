import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const handleMoviesSearch = (movies) => {
        setMovies(movies)
    }
   
    return(
        <AppContext.Provider value={{movies, handleMoviesSearch}}>{children}</AppContext.Provider>
    )
}


export default AppContext;
