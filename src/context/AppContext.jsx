"use client"
const { createContext, useState, useContext } = require("react")

const AppContext = createContext({})

export default function AppContextProvider({ children }) {
    const [sideBar, setSideBar] = useState(false)

    const slideSideBar = (bol) => {
        setSideBar(bol)
    }
    return (
        <AppContext.Provider value={{sideBarState:{sideBar, setSideBar, slideSideBar}}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}