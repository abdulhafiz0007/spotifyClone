import { createContext, useRef } from "react";

export const PlayerContext = createContext();


export const PlayerContextProvider = ({children}) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();


    const contextValue = {
        audioRef,
        seekBg,
        seekBar
    }

    return <PlayerContext.Provider value={contextValue}>
        {children}
    </PlayerContext.Provider>
    
}