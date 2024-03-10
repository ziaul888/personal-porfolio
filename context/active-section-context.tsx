"use client";

import React, {createContext, useContext, useState} from 'react';
import {SectionName} from "@/lib/type";
type activeSectionProviderProps={
    children:React.ReactNode
}
type activeSectionContextType={
    activeSection:SectionName;
    setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick:number;
    setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>
}
  const activeSectionContext=createContext<activeSectionContextType | null>(null)
const ActiveSectionContextProvider = ({children}:activeSectionProviderProps) => {
    const [activeSection,setActiveSection]=useState <SectionName>("Home")
    const [timeOfLastClick,setTimeOfLastClick] = useState(0)
    return (
        <activeSectionContext.Provider value={{activeSection, setActiveSection,timeOfLastClick,setTimeOfLastClick}}>
            {children}
        </activeSectionContext.Provider>
    );
};


export default ActiveSectionContextProvider;
export function  useActiveSectionContext(){
    const context=useContext(activeSectionContext)
    if(context===null){
        throw new Error ("Active section context")
    }
    return context
}