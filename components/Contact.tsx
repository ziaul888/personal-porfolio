'use client';
import React from 'react';
import {Section} from "@react-email/section";
import SectionHeader from "@/components/SectionHeader";
import {FaPaperPlane} from "react-icons/fa";
import {motion} from "framer-motion"
import useSectionView from "@/lib/custom_hook/useSectionInView";
const ContactMe = () => {
    const { ref } = useSectionView("Contact");
    return (
        <motion.section initial={{opacity:0}} whileInView={{opacity:1
        }}  transition={{duration:1}} ref={ref} id="contact" className=" scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem] text-center">
            <SectionHeader>
                Contact Me
            </SectionHeader>
            <p className="text-gray-900 -mt-6">
                Please contact me directly at {" "}
                <a className='underline' href="mailto:ziaul935@gmail.com">ziaul935@gmail.com</a>
                {" "} through this form.
            </p>
            <form className='mt-10 flex flex-col' >
            <input type="email" placeholder='Your email' className='h-14 px-4 rounded-lg border-black'   />
                <textarea  placeholder='Your message' className="h-52 my-3 rounded-lg border-black p-4"/>
                <button className=" group flex gap-2 justify-center items-center h-[3rem]
                   w-[8rem] bg-gray-900
                   text-white rounded-full
                    outline-none
                   transition-all
                   focus:scale-110 hover:scale-110
                   hover:bg-gray-950 active:scale-105                  ">
                    Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1
                    group-hover: -translate-y-1'/>
                </button>
            </form>

        </motion.section>
    );
};

export default ContactMe;
