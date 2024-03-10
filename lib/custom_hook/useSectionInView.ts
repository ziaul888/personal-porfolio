import React, {useEffect} from 'react';
import {useActiveSectionContext} from "@/context/active-section-context";
import {useInView} from "react-intersection-observer";
import {SectionName} from "@/lib/type";

const useSectionView = (sectionName:SectionName,threshold=0.75) => {
    const{setActiveSection,timeOfLastClick}=useActiveSectionContext()
    const {inView,ref} =useInView({
        threshold:threshold
    })

    useEffect(() => {
        if(inView && Date.now()-timeOfLastClick>1000){
            setActiveSection(sectionName)
        }
    }, [inView,setActiveSection,sectionName,timeOfLastClick]);
    return {
        ref
    };
};

export default useSectionView;
