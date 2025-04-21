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
  <span className="font-medium">Software Engineering</span>, I began my career as a NOC Support Engineer. Later, I enrolled in a coding bootcamp where I focused on{" "}
  <span className="font-medium">front-end development</span>.{" "}
  <span className="italic">What I enjoy most about programming</span> is the
  problem-solving aspect—I <span className="underline">love</span> the feeling of finally finding a solution to a complex issue. My core stack includes{" "}
  <span className="font-medium">
    React and Next.js
  </span>
  . I'm also familiar with TypeScript and Prisma, and I'm always eager to explore and learn new technologies. Currently, I'm seeking a{" "}
  <span className="font-medium">full-time position</span> as a software developer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing
  video games, watching movies, and spending time with my dog. I'm also passionate about{" "}
  <span className="font-medium">continuous learning</span>. At the moment, I'm diving into{" "}
  <span className="font-medium">history and philosophy</span>, and teaching myself how to play the guitar.
</p>

    </motion.section>
  )
}

export default About