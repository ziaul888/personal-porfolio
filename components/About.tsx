'use client';
import React, {useEffect} from 'react'
import SectionHeader from './SectionHeader'
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import useSectionView from "@/lib/custom_hook/useSectionInView";
const About = () => {
    const {ref}=useSectionView("About",0.75)
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity: 0,y:100}}
    animate={{opacity: 1,y:0}}
    transition={{delay: 0.127}}
                    id="about"
                    ref={ref}
    >
       <SectionHeader >About me</SectionHeader>
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Software engineering</span>, I start working as noc support engineer. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">front-End  development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}

export default About