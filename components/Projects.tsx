"use client"
import React, {useEffect} from 'react'
import SectionHeader from './SectionHeader'
import { projectsData } from '@/lib/data'
import Project from './Project';
import {useActiveSectionContext} from "@/context/active-section-context";
import {useInView} from "react-intersection-observer";
import useSectionView from "@/lib/custom_hook/useSectionInView";

const Projects = () => {
    const {ref}=useSectionView("Projects",0.75)
  return (
    <section  id="projects" ref={ref} className="scroll-mt-28 mb-28">
        <SectionHeader>
           My Projects
        </SectionHeader>
        <div>
          {projectsData?.map((project,index)=>(
            <React.Fragment key={index}>
            <Project {...project}/>
          </React.Fragment>
          ))}
        </div>
    </section>
  )
}

export default Projects

