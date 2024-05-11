"use client";

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import useSectionView from "@/lib/custom_hook/useSectionInView";
import {useTheme} from "@/context/theme";

const Experience = () => {
    const { ref } = useSectionView("Experience", 0.75);
    const { theme } = useTheme();

    return (
            <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeader>
                Experiences
            </SectionHeader>
            <VerticalTimeline lineColor="">
                {experiencesData?.map((items,index) =>(
                    <React.Fragment key={index}>
                      <VerticalTimelineElement contentStyle={{
                          background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                          boxShadow:"none",
                          border:"1px solid rgb(0,0,0, 0.05)",
                          textAlign:"left",
                          padding:'1.3rem,3rem'

                      }}
                      contentArrowStyle={{
                          borderRight:  theme === "light"
                              ? "0.4rem solid #9ca3af"
                              : "0.4rem solid rgba(255, 255, 255, 0.5)",
                      }}
                      date={items?.date}
                      icon={items?.icon}
                     iconStyle={{
                         background:theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                         fontSize:"1.4rem"
                     }}
                      >
                       <h3 className="font-semibold capitalize">{items?.title}</h3>
                          <p className="font-normal !mt-0">{items?.location}</p>
                          <p className="!mt-0 !font-normal text-gray-700 dark:text-white/75">{items?.description}</p>
                      </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;
