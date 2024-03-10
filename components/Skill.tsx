"use client"
import React from 'react';
import SectionHeader from "./SectionHeader";
import {skillsData} from "@/lib/data";
import useSectionView from "@/lib/custom_hook/useSectionInView";
import {motion} from "framer-motion"
const fadeInAnimation ={
    initial:{
        opacity:0,
        y:100
    },
    animate:(index:number)=>(
        {
            opacity: 1,
            y:0,
            transition:{
                delay:0.06 *index
            }
        }
    )
}
const Skill = () => {
    const {ref}=useSectionView("Skills",0.50)
    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeader>
                My Skills
            </SectionHeader>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData?.map((skills,index)=>(
                    <motion.li variants={fadeInAnimation}
                               initial="initial"
                               whileInView="animate"
                               viewport={{
                                   once: true
                               }}
                               custom={index}
                               key={index} className="bg-white border border-black/[0.1] rounded-xl py-3 px-5">{skills}</motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Skill;
