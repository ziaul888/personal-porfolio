'use client';
import React, {useEffect} from 'react';
import Image from "next/image"
import myImage from "../public/zia-ul-Hoque-bhuiyan.jpg"
import {motion} from "framer-motion"
import Link from 'next/link';
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs"
// @ts-ignore
// import { LuHardDriveDownload } from 'react-icons/lu';
import {useActiveSectionContext} from "@/context/active-section-context";
import {useInView} from "react-intersection-observer";
import useSectionView from "@/lib/custom_hook/useSectionInView";

const Intro = () => {
    const {ref}=useSectionView("Home",0.50)
    return (
        <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id="home">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image src={myImage} alt="my"
                               priority={true}
                               className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span className="text-4xl absolute bottom-0 right-0"
                                 initial={{
                                     opacity: 0, scale: 0,
                                 }}
                                 animate={{opacity: 1, scale: 1}}
                                 transition={{
                                     type: "spring",
                                     stiffness: 125,
                                     delay: 0.1,
                                     duration: 0.7
                                 }}

                    >
                        👋
                    </motion.span>
                </div>

            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                <span className="font-bold">Hello, I'm Ziaul Hoque Bhuiyan.</span> I'm a{" "}
                <span className="font-bold">Frontend react js developer</span> with{" "}
                <span className="font-bold">2+ years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium'
             initial={{opacity: 0, y: 100}}
             animate={{opacity: 1, y: 0}}
             transition={{
                delay:0.1
             }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                </Link>
                <a className='group bg-white px-7 py-5 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110  active:scale-105 transition
                cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' href='/CV.pdf' download>Download CV
                    {/*<LuHardDriveDownload className='opacity-60 group-hover:translate-y-1 transition'/>*/}
                </a>
                <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition
                cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60
                ' href='https://www.linkedin.com' target='_blank'>
                    <BsLinkedin/>
                </a>
                <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full
                 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
                cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' href='https://github.com/ziaul888' target='_blank'>
                    <BsGithub/>
                </a>
            </motion.div>
        </section>
    );
};

export default Intro;
